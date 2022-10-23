import moment from "moment";
import { getFileFromEvent } from "./utils";
// import "moment/locale/us";

// TODO: cleanup/refactor, implement error handling

enum mutatieSoorten {
  iDEAL = "iDEAL",
  incasso = "Incasso",
  onlineBankieren = "Online bankieren",
  overschrijving = "Overschrijving",
  verzamelBetaling = "Verzamelbetaling",
}

export default class IngFileHandler {
  fileData: Array<Record<string, string>>;
  mappedData: Record<string, any>[];
  constructor() {
    this.fileData = [];
    this.mappedData = [];
  }

  process(e: any) {
    const result: Array<Record<string, string>> = [];
    const file = getFileFromEvent(e);
    const fileReader = new FileReader();
    fileReader.onload = () => {
      this.read(fileReader, result);
    };
    fileReader.readAsText(file);
  }

  read(fileReader: FileReader, result: Array<Record<string, string>>) {
    const rows = this.prepareRows(fileReader.result);
    const headers = this.getHeaders(rows.shift());
    this.fileData = this.mapRowsToObj(rows, headers);
    this.handleMapData();
  }
  prepareRows(fileReaderResult) {
    return fileReaderResult.toString().split(/\r?\n|\r/);
  }
  getHeaders(row) {
    return row.replace(/"/g, "").split(";");
  }

  mapRowsToObj(rowsAsString, headers) {
    const results = [];
    rowsAsString.forEach((rowAsString) => {
      rowAsString = rowAsString.replace(/"/g, "");
      if (rowAsString.length) {
        const row = rowAsString.split(";");
        if (row.length) {
          results.push(
            Object.fromEntries(headers.map((_, i) => [headers[i], row[i]]))
          );
        }
      }
    });
    return results;
  }

  handleMapData() {
    for (const dataPoint of this.fileData) {
      console.log(moment(dataPoint["Datum"]).utcOffset());
      const mappedDataPoint = {
        dateTimeUnix: moment(dataPoint["Datum"]).valueOf(),
        importType: "ING",
        dateTime: moment(dataPoint["Datum"])
          .add(moment(dataPoint["Datum"]).utcOffset(), "m")
          .format(),
        senderReceiver: dataPoint["Naam / Omschrijving"],
        amountInEur:
          dataPoint["Af Bij"] === "Af"
            ? -this.parseLocaleNumber(dataPoint["Bedrag (EUR)"], "nl")
            : this.parseLocaleNumber(dataPoint["Bedrag (EUR)"], "nl"),
        balance: this.parseLocaleNumber(dataPoint["Saldo na mutatie"], "nl"),
      };
      this.mappedData.push(mappedDataPoint);
    }
  }

  parseLocaleNumber(stringNumber: string, locale: string) {
    var thousandSeparator = Intl.NumberFormat(locale)
      .format(11111)
      .replace(/\p{Number}/gu, "");
    var decimalSeparator = Intl.NumberFormat(locale)
      .format(1.1)
      .replace(/\p{Number}/gu, "");

    return parseFloat(
      stringNumber
        .replace(new RegExp("\\" + thousandSeparator, "g"), "")
        .replace(new RegExp("\\" + decimalSeparator), ".")
    );
  }

  //   handleFileRead(r:FileReader, result:Array<Record<string, string>>) {
  //     const rows = r.result?.toString().split(/\r?\n|\r/);
  //     if (rows) {
  //       const firstRow = rows.shift();
  //       if (firstRow) {
  //         const headers = firstRow.replace(/"/g, "").split(";");
  //         rows?.forEach((rawRow) => {
  //           rawRow = rawRow.replace(/"/g, "");
  //           if (rawRow.length > 0) {
  //             const row = rawRow.split(";");
  //             if (row.length > 0) {
  //               result.push(
  //                 Object.fromEntries(headers.map((_, i) => [headers[i], row[i]]))
  //               );
  //             }
  //           }
  //         });
  //         this.fileData = result;
  //         // console.log(this.fileData);
  //         this.handleMapData();
  //       }
  //     }
  //   }
}
