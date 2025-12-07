//Basic Types
//Primitive Types(number, string, boolean)
// arrays
// tuples
// Enums
// Any, Unknown, Void, Null, UndeFined,Never
//Primitives and Reference
// [] ,{} , () agr inme se koi bhi bracket use kiya to  mtlb uska type  reference hai
// ex:-
// 12   primitive
// harsh   primitive
// sharma     primitive
// huhu       primitive
// true         primitive
// 1             primitive
// {}          reference
// "apple"     primitive
// false       primitive
// 12.34          primitive
// ()          reference
// primitive
// var a=30
// var b=a
// copying allowed
//Reference
// var a=[1,2,3,4,5]
// var b=a
//copying not allowed isme a b ka reference hai mtlb b kuch change hoga to a me bhi hoga
//--------------------------------TUPLES------------------------------------
// let arr:[String,number]=["hriday",30]
//--------------------------------ENUMS------------------------------------
// enum UserRoles{
//     ADMIN="admin",
//     GUEST="guest",
//     SUPER_ADMIN="super_admin"
// }
//multiple properties bnake unhe use kar sakte h jaise
// UserRoles.ADMIN
// enum StatusCodes {
//     ABANDONED = "abandoned status code 500",
//     NOTFOUND = "not found status code 404"
// }
// StatusCodes.ABANDONED
//--------------------------------NUMBER------------------------------------
// let a:number
// a=30
//----------------------------ANY,UNKNOWN,VOID,NULL,UNDEFINED,NEVER------------------------------
// let a:any;
// a=12;
// a="harsh"
// let a:unknown;
// a=12;
// a="harsh";
// if(typeof a==="string"){
//     a.toUpperCase();
// }
// function abcd():void {
//     console.log("hey")
// }
// let a:string|null;
// a="hriday"
// a=null
// function abcd():never {
//     while(true)
// }
// abcd()
// console.log("hey")
//--------------------------------TYPE INFERENCE & TYPE ANNOTATIONS------------------------------------
// let a=30; //inference
//let a:number //annotation
//--------------------------------TYPE ANNOTATIONS------------------------------------
// let a:boolean;
// function abcd(a:number,b:string):void {
// }
//--------------------------------INTERFACES------------------------------------
//interface:-
// interface User {
//     name: string,
//     email: string,
//     password: string,
//     gender?:string
// }
// function getDataOfUser(obj: User) {
// }
// getDataOfUser({ name: "harsh",email:"example@gmail.com",password:"pass@123" })
// other ex:-
// interface Abcd {
//     name: string;
// }
// interface Abcd {
//     email: string;
// }
// function abcd(obj:Abcd) {
//     obj.name,
//     obj.email
// }
//extending interfaces:-
// interface User {
//     name: string,
//     email: string,
//     password: string,
//     gender?:string
// }
// interface Admin extends User{
//     admin:boolean;
// }
// function getDataOfUser(obj: Admin) {
//     obj.admin
// }
//--------------------------------TYPE ALIASES------------------------------------
// type value= string|number|null;
// let a:value
// a="hriday"
// a=50
// other ex:-
// type arg = string | null;
// function abcd(obj: arg) {
// }
// abcd("hriday")
//--------------------------------INTERSECTION TYPES------------------------------------
// type User={
//     name:string,
//     email:string,
// }
// type  Admin = User & {
//     getDetails(user:string):void
// }
// function abcd(a:Admin){
// a.name
// a.email
// a.getDetails("hriday")
// }
// difference between interface and type alias
// in type alias
// type abcd=number
// type abcd=string
// not valid
// in interface
// interface Abcd {
//     name: string;
// }
// interface Abcd {
//     email: string;
// }
// function abcd(obj:Abcd) {
//     obj.name,
//     obj.email
// }
//valid
//-----------------------------------Classes & Objects-----------------------------------------------------
// classes and constructor
// class BottleMaker {
//     constructor(public name: string, public price: number) { }
// }
// let b1 = new BottleMaker("Milton", 1200);
// class HumanMaker {
//     age = 0; //fix value
//     constructor(public name: string, public isHandsome: boolean) { // value set by us
//     }
// }
// new HumanMaker("Harsh", true);
// class Music {
//     constructor(public name: string, public artist: string, public thumbnail: string = "somethumbnail.jpg", public length: number, public free: boolean) {  
//         if (!thumbnail) {
//         this.thumbnail="somethumbnail.jpg"
//     }
// }
// }
// let m1 = new Music("Chal Chhaiya Chhaiya", "Harsh Sharma", "", 1200, false);
// m1.name="Teri Deewani"
// class Music {
//     public name;
//     public artist;
//     public thumbnail;
//     public length;
//     public free;
//     constructor(name: string, artist: string, thumbnail: string = "somethumbnail.jpg", length: number, free: boolean) {
//         this.name = name;
//         this.artist = artist;
//         this.thumbnail = thumbnail;
//         this.length = length;
//         this.free = free;
//     }
// }
//this keyword concepts
// class Abcd {
//     name = "harsh";
//     changeSomeStuff() {
//         this.name
//         this.changeSomeMoreStuff
//     }
//     changeSomeMoreStuff() {
//         console.log("hey");
//     }
// }
// class BottleMaker {
//     constructor(public name: string) {}
// }
// let b1 = new BottleMaker("milton");
//public, private and protected access modifier
// class BottleMaker {
//     constructor(private name: string) {}
// }
// let b1 = new BottleMaker("milton");
// b1.name="casio"//it willnow show error but still compiled
// class BottleMaker {
//     constructor(public name: string) {
//         this.name = name;
//     }
//     changing() {
//         this.name = "harsh";
//     }
// }
// let b1 = new BottleMaker("Milton");
// class BottleMaker {
//     constructor(private name: string) {
//         this.name = name;
//     }
//     changing() {
//         this.name = "harsh";
//     }
// }
// let b1 = new BottleMaker("Milton");
// b1.changing();
// class BottleMaker {
//   constructor(public name: string) {}
// }
// class MetalBottleMaker extends BottleMaker {
//   constructor(name: string) {
//     super(name);
//   }
//   getValue() {
//     console.log(this.name);
//   }
// }
// let b1 = new MetalBottleMaker("Milton");
// b1.getValue();
// class BottleMaker {
//     private halua:string="halua"
//   constructor(public name: string) {}
// }
// class MetalBottleMaker extends BottleMaker {
//   constructor(name: string) {
//     super(name);
//   }
//   getValue() {
//     console.log(this.name,this.halua);
//   }
// }
// let b1 = new MetalBottleMaker("Milton");
// b1.getValue();
// class BottleMaker{
//     protected name="milton"
// }
// class MetalBottleMaker extends BottleMaker{
//     public material="metal"
//     changeName(){
//         this.name="some other name"
//     }
// }
// let b1=new MetalBottleMaker()
// b1.changeName()
// b1.name="harsh" //not allowed
//optional properties:-
// class User {
//   constructor(public readonly name: string) {}
//   changeName() {
//     this.name = "hellyow";
//   }
// }
// let u1 = new User("Harsh");
// u1.changeName();
//parameters properties:-
// class User {
//   constructor(public name: string, public age: number, public gender?: string) {}
// }
// let u1 = new User("Harsh", 25, "male");
// let u2 = new User("LagBatao", 18);
//Getters and Setters
// without getters and setters
// class User{
//     constructor(public name:string, public age:number){}
//     getName(){
//         return this.name
//     }
//     setName(value:string){
//         return this.name=value
//     }
// }
// let u1= new User("harsh",50)
// u1.getName() //we get harsh
// u1.setName("harshita") //it sets name to harshita
// with getters and setters
// class User {
//   constructor(public _name: string, public age: number) {}
//   get name() {
//     return this._name;
//   }
//   set name(value: string) {
//     this._name = value;
//   }
// }
// let u1 = new User("harsh", 25);
// u1.name // //we get harsh
// u1.name="harshita"  //it sets name to harshita
//Static members
// class Shery {
//   static version = 1.0;
//   static getRandomNumber() {
//     return Math.random();
//   }
// }
// Shery.version //we can directly access without creating an instance they dont store in instance
// Shery.getRandomNumber
//Abstract Classes
// class CookingEssentials {
//   constructor(protected gas: number, public gasKaName: string) {}
// }
// class Sabji extends CookingEssentials {
// }
// class Cake extends CookingEssentials {
// }
//---------------------------------------Introduction to Functions----------------------------------------------------
// function abcd():void {
// }
// function abcd(name:string,cb:(value:string)=>void){
// } 
// abcd("harsh",(value) => {
//   console.log(value)
// }
// )
// function abcdef(name: string, age: number, cb: (arg: string) => void) {
//   cb("hey");
// }
// abcdef("harsh", 25, (arg: string) => {
//   console.log(arg);
// });
//optional and default parameters
//optional parameter
// function abcdef(name: string, age: number, gender?: string) {
// }
// abcdef("harsh", 25, "male");
// abcdef("lagbataq", 22);
//default parameter
// function abcdef(name: string, age: number, gender: string = "not to be disclosed") {
//   console.log(name, age, gender);
// }
// abcdef("harsh", 25, "male");
// abcdef("lagbataq", 22);
//Rest Parameters
// function abcd(...args: number[]) {
// }
// abcd(1, 2, 3, 4, 5, 6, 7, 8, 89, 9, 0);
// functions overloading
// ts fnc signature
// function abcd(a: string): void;
// function abcd(a: string, b: number): number;
// function abcd(a: any, b?: any) {
//   if (typeof a === "string" && b === undefined) {
//     console.log("hey");
//   }
//   if (typeof a === "string" && typeof b === "number") {
//     return 123;
//   }
//   else throw new Error("something is wrong");
// }
// abcd("hey")
// abcd("hey",30)
//--------------------------------------------------------------------------------Generics---------------------------------------------------------------------------------
// Generics
// Generic functions
// humein ek function bnana hai jo ki accept karega koi bhi value and usey print karega
// hum ek function ko use krte waqt bata skte hai ki function argument ko kis type se treat kare
// function abcd<T>(a: T) { }
// abcd<string>("harsh");
// abcd<number>(120);
// function abcd<H>(a: H, b: string, c: number) { }
// abcd<string>("halua", "pudi", 4);
// function log<T>(val: T) {
//   console.log(val);
// }
// log(30)
// Generic interfaces
// interface Halua<T> {
//   name: string;
//   age: number;
//   key: T;
// }
// function abcd(obj: Halua<string>) { }
// abcd({ name: "foo", age: 25, key: "ahjscasbc" });
// Generic classes
// class BottleMaker<T> {
//   constructor(public key: T) { }
// }
// let b1 = new BottleMaker<string>("hey");
// console.log(b1);
// note important
// function abcd<T>(a: T, b: T): T {
//   return "hey" as T;//as returns string but it should return T type
//   // return <T>"hey"
// }
// abcd<string>("hey", "hello");
//-------------------------------------------Modules--------------------------------------------------------
// Exporting and importing modules
// import { getDetails, addPayment } from "./payment";
// addPayment(30)
// Default exports
// import Payment from "./payment";
// let a =new Payment(30)
//------------------------------Type Assertions--------------------------------------------
//type assertion ka matlab batana ts ko ki particular cheej ka type kya hai, ye aap tab karte ho jab aap ts se jaada us value ka type jaante ho
// let a:any=30;
// (a as number).toString()
// or you can write
// (<number>a).toString()
//type casting
// let a=Number("30")
// console.log(typeof a)
//non null assertion operation
// let a: null | undefined | string;
// a = "hey";
// a!.length //a! gurantees ki ab a ki value null ya undefined nhi hogi
//------------------------------------------------------------------------Type Guards------------------------------------------------------------------------------
//Type Guards and TypeScript Utility Types
// Using typeof and instanceof
// Partial, Required, Readonly
// type guards -> type narrowing
//typeof
// function abcd(arg: string | number) {
//   if (typeof arg === "number") {
//     arg.toFixed();
//   }
//   else if (typeof arg === "string") {
//     arg.length
//    }
//   else { 
//     throw new Error("Pagal h kya");
//   }
// }
// abcd(12);
// abcd("hello");
//instanceof
// class TvKaRemote {
//   switchtvoff() {
//     console.log("switching off tv");
//   }
// }
// class CarKaRemote {
//   switchCaroff() {
//     console.log("switching off car");
//   }
// }
// const tv = new TvKaRemote();
// const car = new CarKaRemote();
// function switchOffKaro(device: TvKaRemote | CarKaRemote) {
//   if (device instanceof TvKaRemote) {
//     device.switchTvOff();
//   }
//   else if (device instanceof CarKaRemote) {
//     device.switchCarOff();
//   }
// }
// switchOffKaro()
