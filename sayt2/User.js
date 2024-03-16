
class User {

    #name;
    #age;
    #city;

    setAge(age) {
        this.#age = age;
        return this;
    }

    setName(name) {
        this.#name = name;
        return this;
    }

    setCity(city) {
        this.#city = city;
        return this;
    }

    getAge() {
        return this.#age;
    }

    getName() {
        return this.#name ? this.#name : 'name kiritilmagan';
    }

    getCity() {
        return this.#city;
    }

}
