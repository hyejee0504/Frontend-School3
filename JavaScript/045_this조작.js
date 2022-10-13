//call(), apply()

var peter = {
    name: 'peter',
    sayName: function(느낌표){
        console.log(this.name + 느낌표);
    }
}

var bruce = {
    name: 'bruce'
}

peter.sayName();
peter.sayName.call(bruce); //재사용하고 싶은뎅 사용할 수 없을때

peter.sayName.call(bruce, '!'); //인자를 한개만 전달가능


peter.sayName.apply(bruce, ['a', 'b']);


