const people = [
    {
        firstName: 'John',
        lastName: 'Doe',
        birthday: '1994-01-01',
    },
    {
        firstName: 'Jane',
        lastName: 'Doe',
        birthday: '1991-02-02',
    },
    {
        firstName: 'Jack',
        lastName: 'Doe',
        birthday: '1992-03-03',
    },
];

function getInfo(age, people) {
    const result = people.filter(person => {
        const birthday = new Date(person.birthday);
        const today = new Date();
        let ageInYears = today.getFullYear() - birthday.getFullYear();
        const m = today.getMonth() - birthday.getMonth();
        const d = today.getDate() - birthday.getDate();
        if (m < 0 || (m === 0 && d < 0)) {
            ageInYears--;
        }
        return ageInYears === age;
    });
    return result;
}

const peopleOfAge24 = getInfo(30, people);
console.log(peopleOfAge24);
