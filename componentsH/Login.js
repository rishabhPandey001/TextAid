export default function Login () {
    return (
        <div className="container m-4">
        
        <form action="mailto:rishabhpandey600@gmail.com" method="post">
          <h2>Registration form</h2>
          <hr/>
          <p class ="babu">Hii, this is the<span class="baby"> official site of Farzi-Institue for All Preperations</span> . Register yourself for absolutely free and get acces to all our test series ,video lectures ,PYQ.</p>
          <br />
          Name:
          <input className=" m-3" type="text" name ="name" placeholder="Enter your name" required />
          <br />
          <br/>
          Gender:
          <ul>
          <li><input type="radio" name="male" /> Male</li> 
           <li><input type="radio" name="male" />Female</li>
          <li> <input type="radio" name="male" />Others</li>        
          </ul>
          Address:
          <textarea placeholder="Address here"></textarea>
           <br/>
           <br/>
          Roll No:
          <input type="number" name="roll" />
          <br/>
          <br/>
          <label for="ab">E-Mail:</label>
           <input type ="email" id="ab" placeholder="abc@gmail.com" required />
          <br/>
          <br/>
          <label for="a">DOB:</label>
          <input type ="datetime-local" id="a" />
          <br/><br/>
          City of Residence:
          <select >
          <option>--Select your city--</option>
           <option>Delhi</option>
           <option>Noida</option>
           <option>Goa</option>
           <option>Lucknow</option>
           <option>Dehradun</option>
          </select>
           <br/>
           <br/>
           <h2>Payment</h2>
           <hr/>
           <p class="baba"><i>Proceed for payment</i> </p>
           Bank :
           <select>
             <option>--Select your bank --</option>
             <option>State Bank Of INDIA</option>
             <option>ICICI</option>
             <option>PNB</option>
             <option>BOB</option>
           </select>
           <br/>
           <br/>
           Card:
           <select>
             <option>--Select type of card</option>
             <option>MasterCard</option>
             <option>Rupay</option>
             <option>BHag</option>
           </select>
           <br />
           <br/>
           Amount :
            <input type="number" name="amnt" />
           <br/>
           <br/>
           Card No. :
            <input type="number" name="acc" placeholder="1111-2222-3333-4444" />
           <br/>
           <br/>
           CVV:
           <input type="password" name="pass" required placeholder="Sensitive data" />
            <br/>
          <br/>
           <button type="submit" className="btn btn-primary mr-3">Submit</button>
           <button type="button" class="btn btn-warning">Warning</button>
          <br/>
          <br/>
           </form>
        </div>
    );
}