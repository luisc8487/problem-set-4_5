# Problem Set 4-5

## Classes and Inheritance 

**1. What is inheritance in programming?**

Inheritance in programming is a substitute class that inherits methods from the main class.
Its like Luis Jr., which is a descendent from Luis Sr, inherits the properties and assists from Luis Sr.

**2. In a code snippet, demonstrate inheritance by creating two classes where one is the parent class and one is the child class.**

```js
class Person{
    constructor(name){
        this.name = name;
    }
    greetPerson(position){
        console.log(`Hello ${this.name}, ${position}`);
    }
}

class Profession extends Person{
    constructor(name, occupation){
    super(name);
        this.occupation = occupation;
    }
    job(){
        this.greetPerson(`you are a  ${this.occupation}!`)
    }
}

const jake = new Profession("Jake", "Professor");
jake.job();     // "Hello Jake, you are a Professor!"
```

**3. What is polymorphism? Show an example in a code snippet.**

(**Poly** = many) + (**morphism** = forms) = many forms

**Polymorphism** is one of the four pillars that make up Object Orientated Programming. 

**Polymorphism** is a technique that allows the programmer can write multiple types of objects to share the same property and method names even if their implementation is different. 
```js
class Person{
    constructor(name){
        this.name = name;
    }
    greetPerson(position){
        console.log(`Hello ${this.name}, ${position}`);
    }
}

class Profession extends Person{
    constructor(name, occupation){
    super(name);
        this.occupation = occupation;
    }
    job(){
        this.greetPerson(`you are a  ${this.occupation}!`)
    }
}

const jake = new Profession("Jake", "Professor");
jake.job();     // "Hello Jake, you are a Professor!"
```

Let us use the same example I gave before. The code above demonstrates polymorphism since `jake` is a descendent of `Person` which we have defined as a `greetPerson` method. Yet `jake` was constructed based on `Profession`. `Profession` is a descendant of `Person`. So we can treat `jake` or `Profession` as `Person` objects as well. Hence, why `Person` can come in many forms.