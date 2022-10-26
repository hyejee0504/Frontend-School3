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

// class MakeSausage {
//     constructor(ingredients){
//         this.ingredients = ingredients;
//     }
//     taste(){
//         console.log([...ingredients]+'맛이 난다!');
//     }
// }

// class FireSauseage extends MakeSausage{
//     constructor(ingredients){
//         super(ingredients);
//     }
//     taste_fire(){
//         this.taste();
//         console.log('불맛이 난다!');
//     }
// }

// const babysauseage = new FireSauseage();
// babysauseage.taste_fire(['파', '불고기']);

class 소세지 {
    constructor(...theArgs){
        for (const arg of theArgs) {
            this[arg] = arg
        }
    }
    taste(){
        let text = ""
        for(const key in this){
        text += `${this[key]}맛이 납니다.`
    }
        return text;
}
}
class 불맛소세지 extends 소세지 {
    taste(){
        let text = "불 맛도 나네요"
        console.log(super.taste() + text)
    }
} 
const 내소세지 = new 불맛소세지("파,불고기,치즈")
내소세지.taste()