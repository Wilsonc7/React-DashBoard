
import PropType from "prop-types";
import { useState } from "react";


export const FormSearch = ({getMovies}) => {

 const [valuesForm, setValuesForm]=useState ({})

const handleInputChange = ({target}) => {
  setValuesForm({
    valuesForm,
    [target.name] : target.value
  })
}
const handleSubmit=(event)=>{
  event.preventDefault()


  getMovies(`/api/v1/movies?keyword=${valuesForm.keyword}`)

  
}

  return (
    <form onSubmit={handleSubmit}>

      <div className="input-group mb-3">
        <input type="text" name="keyword" className="form-control" onChange={handleInputChange} />
        <button className="btn input-group-text" type="submit">
          <i className="fa fa-search"></i>
        </button>
      </div>

    </form>
  );
};
 FormSearch.propTypes={
  getMovies:PropType.func
 }