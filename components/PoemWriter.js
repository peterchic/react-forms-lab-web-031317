import React from 'react';

export default class PoemWriter extends React.Component {
  constructor() {
    super();
    this.state = {
      poem: '',
      isValid: false
    };

    this.handleChange = this.handleChange.bind(this)
  }

  errorMessage(){
    return (
      <div id="poem-validation-error" style={ {color: 'red'} }>
        This poem is not written in the right structure!
      </div>
    )
  }

  handleChange(event){
    this.setState({
      poem: event.target.value,
    })
  }

  checkPoem(str){
       var lines = str.split("\n")
       if(lines.length >= 3){
         var wordsInFirstLine = lines[0].trim().split(" ").length
         var wordsInSecondLine = lines[1].trim().split(" ").length
         var wordsInThirdLine = lines[2].trim().split(" ").length
         if(lines.length === 3 && wordsInFirstLine === 5 && wordsInSecondLine === 3 && wordsInThirdLine === 5){
           return true
         }else{
           return false;
         }
       }else{
         return false;
       }

     }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.poem} onChange={this.handleChange} />
        {this.checkPoem(this.state.poem) ? null : this.errorMessage()}
      </div>
    );
  }
}
