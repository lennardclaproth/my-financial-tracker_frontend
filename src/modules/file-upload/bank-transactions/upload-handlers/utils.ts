function fileExists(e) {
    if ("files" in e.target && e.target.files) {
        return true
    }
}

function getFileFromEvent(e){
    if(fileExists(e)){
        return e.target.files[0];
    }
    return false
  }

export { getFileFromEvent };
