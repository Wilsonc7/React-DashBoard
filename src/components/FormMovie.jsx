import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import PropTypes from "prop-types";
import { validate } from "../validation/movie-validator";

export const FormMovie = ({
  handleAddMovie,
  movie,
  setMovie,
  handleUpdateMovie,
}) => {
  const [genres, setGenres] = useState([]);

  const getGenres = async () => {
    let response = await fetch(`${import.meta.env.VITE_APP_API_URL}/genres`);
    let result = await response.json();
    setGenres(result.data);
  };

  useEffect(() => {
    getGenres();
  }, []);

  useEffect(() => {
    if (movie) {
      formik.setValues({
        title: movie.title,
        rating: movie.rating,
        awards: movie.awards,
        release_date: movie.release_date.split("T")[0],
        length: movie.length,
        genre_id: movie.genre ? movie.genre.id : null,
      });
    }
  }, [movie]);

  const formik = useFormik({
    initialValues: {
      title: "",
      rating: "",
      awards: "",
      release_date: "",
      length: "",
      genre_id: "",
    },
    validate,
    onSubmit: (values) => {
      movie ? handleUpdateMovie(movie.id, values) : handleAddMovie(values);
      formik.handleReset();
    },
  });

  const handleCancelForm = () => {
    setMovie(null);
    formik.handleReset();
  };

  return (
    <Form className="row" onSubmit={formik.handleSubmit}>
      <Form.Group className="mb-3 col-12">
        <Form.Label>Titulo</Form.Label>
        <Form.Control
          type="text"
          placeholder="Titulo de la pelicula"
          name="title"
          onChange={formik.handleChange}
          value={formik.values.title}
        />
        {formik.errors.title && (
          <small className=" mr-2 text-danger">{formik.errors.title} </small>
        )}
      </Form.Group>
      <Form.Group className="mb-3 col-12 col-md-6">
        <Form.Label>Rating</Form.Label>
        <Form.Control
          type="number"
          name="rating"
          onChange={formik.handleChange}
          value={formik.values.rating}
        />
        {formik.errors.rating && (
          <small className=" mr-2 text-danger">{formik.errors.rating} </small>
        )}
      </Form.Group>

      <Form.Group className="mb-3 col-12 col-md-6">
        <Form.Label>Premios</Form.Label>
        <Form.Control
          type="number"
          name="awards"
          onChange={formik.handleChange}
          value={formik.values.awards}
        />
        {formik.errors.awards && (
          <small className=" mr-2 text-danger">{formik.errors.awards} </small>
        )}
      </Form.Group>

      <Form.Group className="mb-3 col-12 col-md-6">
        <Form.Label>Duracion</Form.Label>
        <Form.Control
          type="number"
          name="length"
          onChange={formik.handleChange}
          value={formik.values.length}
        />
        {formik.errors.length && (
          <small className=" mr-2 text-danger">{formik.errors.length} </small>
        )}
      </Form.Group>

      <Form.Group className="mb-3 col-12 col-md-6">
        <Form.Label>Fecha de estreno</Form.Label>
        <Form.Control
          type="date"
          name="release_date"
          onChange={formik.handleChange}
          value={formik.values.release_date.toString()}
        />
        {formik.errors.release_date && (
          <small className=" mr-2 text-danger">
            {formik.errors.release_date}{" "}
          </small>
        )}
      </Form.Group>

      <Form.Group className="mb-3 col-12">
        <Form.Label>Genero</Form.Label>
        <Form.Select
          className="form-control"
          name="genre_id"
          onChange={formik.handleChange}
          value={formik.values.genre_id}
        >
          <option hidden defaultChecked>
            Seleccione....
          </option>
          {genres.map(({ name, id }) => (
            <option
              key={id}
              defaultChecked={movie && movie.genre_id == id ? true : false}
              value={id}
            >
              {name}
            </option>
          ))}
        </Form.Select>
        {formik.errors.genre_id && (
          <small className=" mr-2 text-danger">{formik.errors.genre_id} </small>
        )}
      </Form.Group>

      <Form.Group className="mb-3 col-12 ">
        <div className="d-flex justify-content-between ">
          <Button
            onClick={handleCancelForm}
            className="w-100"
            variant="outline-danger"
          >
            CANCELAR
          </Button>
          <Button type="submit" className="w-100" variant="outline-success">
            GUARDAR
          </Button>
        </div>
      </Form.Group>
    </Form>
  );
};

FormMovie.propTypes = {
  handleAddMovie: PropTypes.func,
  movie: PropTypes.object,
  handleUpdateMovie: PropTypes.func,
  setMovie: PropTypes.func,
};
