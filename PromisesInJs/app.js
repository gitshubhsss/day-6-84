function saveToDb(data) {
  return new Promise((success, failure) => {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4) {
      success("sucsess : data was saved");
    } else {
      failure("failure : weak connection");
    }
  });
}
saveToDb("shubham")
  .then((result) => {
    console.log("Data 1:saved");
    console.log(result);
    return saveToDb("ashish");
  })
  .then((result) => {
    console.log("Data 2:Saved");
    console.log(result);
    return saveToDb("pavan");
  })
  .then((result) => {
    console.log("Data 3 :Saved");
    console.log(result);
  })
  .catch(()=>{
    console.log("weak connection");
  })