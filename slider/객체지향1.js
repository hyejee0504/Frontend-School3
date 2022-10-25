// const hyeji = {
//     name : '혜지',
//     mbti: 'ENTJ',
//     likeIt: function(){
//         console.log('뜨개질을 좋아해요!');
//     },
//     likeFood: function(food){
//        food.foodlist();
//     }
// }

// const food = {
//     favorite_food:['알리오올리오', '마라탕'],
//     foodlist: function(){
//         console.log('제가 좋아하는 음식은 '+ [...this.favorite_food]+'입니다.');
//     }
// }

class Hyeji {
    constructor(name, mbti){
        this.name = name;
        this.mbti = mbti;
    }

    likeIt(){
                console.log('뜨개질을 좋아해요!');}
    likeFood(food){
                      food.foodlist();}
}

class Food {
    constructor(){
        this.favorite_food = ['알리오올리오', '마라탕']
    }
    
    foodlist(){
        console.log('제가 좋아하는 음식은 '+ [...this.favorite_food]+'입니다.');
    }
}
const hyeji = new Hyeji('hyeji', 'entj');
const food = new Food;

hyeji.likeFood(food);





// hyeji.likeFood(food);

// function NewFactory(foodlist){
//     this.list =  foodlist;
    
// }

// NewFactory.prototype.list_show = function(){
//     let random_num = parseInt(Math.random()*(this.list.length));
//     console.log(this.list[random_num]);
// }

// let robot1 = new NewFactory(['알리오올리오', '마라탕', '순두부찌개', '삼겹살', '맥주', '고기국수', '콘치즈']);

