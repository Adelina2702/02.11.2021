// import React, { Component } from "react";

// class Receipts extends Component {
//     state ={
//         value: ""
//     };

//     onChange = (e) => {
//         this.setState({value: e.target.value})
//     }
//     render(){
//         const {value} = this.state
       
//         return (
//             <>
//         <h1>Meals: {value}</h1>
//         <input type="radio" value="Ramen" className="eda" onChange={this.onChange} checked={value === "Ramen"} />Ramen
//         <br />
//                 <input type="radio" value="French fries" className="eda" onChange={this.onChange} checked={value === "French fries"} />French fries
//         <br />
//                 <input type="radio" value="Chicken" className="eda" onChange={this.onChange} checked={value === "Chicken"} />Chicken
//         </>
//         );
//     }
//     }
// export default Receipts;



import React, {useState} from "react";
import Ingredients from "../Ingredients/Ingredients";

const Receipts = () => {
    const [meal, setMeal] = useState("")
    return (
        <div>
            <input type="radio" name="eda" onChange={() => setMeal("Ramen")} />
            Ramen
            <br />
            <input type="radio" name="eda" onChange={() => setMeal("French fries")} />
            French fries
            <br />
            <input type="radio" name="eda" onChange={() => setMeal("Chicken")} />
            Chicken
            <Ingredients meal={meal} />
        </div>
    );
};

export default Receipts;