let user = {
    id: 1,
    name: "Pig",
    age: "2",
};

for (let prop in user) {
    console.log(prop, user[prop]);
}
