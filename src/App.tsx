import React from 'react';
import coverImage from './assets/cover.avif';
import FormInput from './components/FormInput';
import { inputs, InputType } from './util';
import './App.scss';

function App() {
  const [form, setForm] = React.useState({
    email: '',
    password: '',
  });

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isCheck = e.target.type === 'checkbox';
    const formState = {
      ...form,
      [e.target.name]: isCheck ? e.target.checked : e.target.value,
    };
    setForm(formState);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    window.alert(
      `Form submited! email: ${form.email} password: ${form.password}`
    );
  };

  return (
    <div className="App">
      <div className="wrapper">
        <div className="form-wrapper">
          <form className="form" onSubmit={handleSubmit}>
            <h2 className="form__title">Форма входа</h2>
            {inputs.map((inp: InputType) => (
              <FormInput
                {...inp}
                onInputChange={onInputChange}
                value={form[inp.name as keyof typeof form]}
                key={inp.id}
              />
            ))}
            <div className="form__actions">
              <span className="form__remember">
                <label className="custom-check">
                  <input
                    name="remember"
                    type="checkbox"
                    onChange={onInputChange}
                  />
                  <span className="checkmark"></span>
                  Запомнить
                </label>
              </span>
              <a href="forgot">Восстановить пароль</a>
            </div>
            <button className="form__button">Войти</button>
          </form>
          <span className="form__signup">
            Нету аккаунта? <a href="signup">Создать</a>
          </span>
        </div>
        <div className="image-wrapper">
          <img className="cover-image" src={coverImage} alt="landscape" />
        </div>
      </div>
    </div>
  );
}

export default App;
