export type InputType = {
  id: number;
  name: string;
  placeholder: string;
  type: string;
  errorMessage: string;
  required: boolean;
  pattern?: string;
};

export const inputs: InputType[] = [
  {
    id: 1,
    name: 'email',
    placeholder: 'Введите ваш емеил',
    type: 'email',
    errorMessage: 'Введите корректный емеил',
    required: true,
  },
  {
    id: 2,
    name: 'password',
    placeholder: 'Введите ваш пароль',
    type: 'password',
    errorMessage:
      'Пароль должен состоять из 6-18 символов и включать в себя как минимум 1 букву и 1 число.',
    pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9!@#$%^&*]{6,18}$`,
    required: true,
  },
];
