export default function validatePoem(poem){
  const lines = poem.split("\n")
  return lines.length ===3 && linesAreValid(lines)
}

function linesAreValid(lines){
  return lineIsValid(lines[0], 5) && lineIsValid(lines[1], 3) && lineIsValid(lines[2], 5)
}
  errorMessage(){
  if(!validPoem(this.state.poem)){
    return (<div id="poem-validation-error" style={ {color: 'red'} }>
      This poem is not written in the right structure!
    </div>
    )
  }
}

fucntion lineIsValid(line, num){
  return line.split(" ").filter(word => word)
}


poemIsValid(poem){
  const lines = poem.split("\n")
  return lines.length === 3 && lines[0].split(' ').filter(word => word.length !== 0 ).length === 5
  && lines[0].length.split(' ').filter(word => word.length !== 0 ).length === 3
  && lines[2].split(' ').filter(word => word.length !== 0 ).length === 5
}

}
