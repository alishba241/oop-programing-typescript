#!/usr/bin/env node


import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.redBright("\n<<<<<<<<<<<<OBJECT ORIENTED PROGRAMING>>>>>>>>>>>>\n"));

class Student {
    name:string
    constructor(n:string){
        this.name=n
    }
}

class Person{
    students:Student[]=[]
    addStudent(obj:Student){
    this.students.push(obj)
}
}

const persons = new Person()
const programStart =async (persons:Person)=>{
    do{
    console.log(chalk.magentaBright("Welcome!"));
    const ans = await inquirer.prompt({
        
        name:"select",
        type:"list",
        message:chalk.yellowBright("Whom would you like to interact with?"),
        choices:["staff","student","exit"]
    })
    if(ans.select == "staff"){
        console.log(chalk.greenBright("You approach the staff room. Please feel free to ask any question"));
    }
    else if(ans.select == "student"){
        const ans = await inquirer.prompt({
            name:"student",
            type:"input",
            message:chalk.yellowBright("Enter the student's name you wish to engage with:")
        })
        const student = persons.students.find(val => val.name == ans.student)
        if(!student){
            const name = new Student(ans.student)
            persons.addStudent(name)
            console.log(chalk.magenta(`Hello i am ${name.name}. Nice to meet you!!`))
            console.log(chalk.bold.blueBright("New student added"))
            console.log(chalk.bold.blueBright("current student list:"));
            console.log((persons.students));
        }else {
            console.log(chalk.magenta(`Hello i am ${student.name}. Nice to see you again!!`));
            console.log(chalk.bold.blueBright("Existing student list:"));
            console.log((persons.students));
        }
    }else if (ans.select == "exit"){
        console.log(chalk.redBright("Exiting program..."));
        process.exit()
}
    }while(true)
}
programStart(persons)