// TODO: Create a constructor function called 'Developer' that takes in 'name' and 'tech'
// TODO: Include a method called 'introduction()' that introduces the Developer with their name and favorite tech
function Developer(name,  tech) {
    this.name = name;
    this.tech = tech;
    this.introduction = () => {
        if (this.name === true) {
            console.log(this.tech);
        }
    };
}

// TODO: Create a new object using the 'Developer' constructor
const Kyle = new Developer (true, 'Kyle uses midas32 mixing board!');
const midas32 = new Developer(false, 'Nope!');

// TODO: Call the 'introduction()' method on the new object
