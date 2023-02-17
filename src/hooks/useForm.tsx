import { useState } from 'react';

export const useForm = <T extends Object>(initialState: T) => {
  const [state, setState] = useState(initialState);
  // key of : llave de T, las propriedades del formulario se respectan (email, password)
  const onChange = <K extends Object>(value: K, field: keyof T) => {
    setState({
      ...state,
      [field]: value,
    });
  };
  return {
    ...state,
    form: state,
    onChange,
  };
};
