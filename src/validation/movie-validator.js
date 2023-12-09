export const validate = (values) => {
    const errors = {};
    if (!values.title) {
        errors.title = 'Requiere titulo';
    }
    if (!values.rating) {
        errors.rating = 'Requiere Rating';
    }
    if (!values.awards) {
        errors.awards = 'Requiere premios';
    }
    if (!values.release_date) {
        errors.release_date = 'Requiere fecha de estreno';
    }
    if (!values.length) {
        errors.length = 'Requiere duracion';
    }

    if (!values.genre_id) {
        errors.genre_id = 'Requiere genero';
    }


    return errors;
};
