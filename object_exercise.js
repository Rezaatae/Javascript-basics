var employee = {
    name: "John Smith",
    job: "Programmer",
    age: 31,
    nameLength: function(){
        console.log(this.name.length)
    },
    alrtEmp: function(){
        alert("Name is "+this.name+", Job is "+this.job+" Age is "+this.age+".")
    },
    lname: function(){
        const myArr = this.name.split(" ");
        console.log(myArr[myArr.length-1]);
    }
}



