export default function Contact() {
  return `
  
  <div class="container-fluid api-button text-center"> 
  <h1> Give us your feed back, please! </h1>
  <div class=box>
  <div class="wrapperContact">
    <input type="text" class="boxContact box1Contact" name="firstname" placeholder="Your first name here">
    <input type="text" class="boxContact box2Contact" name="lastname" placeholder="Your last name here">
    <input type="text" class="boxContact box3Contact" name="yourEmail" placeholder="Your email, please.."/>
    <textarea name="subject" class="boxContact box4Contact" placeholder="Write your thoughts here.." cols="30" rows="10"></textarea>
    <input class="boxContact box5Contact" type="submit" value="Submit"/>
  </div>
  </div>
    `;
}
