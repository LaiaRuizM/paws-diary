import { FC } from "react";
import { ButtonProps } from "./button.interface";
import { ButtonStyled } from "./button.styles";

export const Button: FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <ButtonStyled {...props} className={className}>
      {children}
    </ButtonStyled>
  );
};

//? 1.- El spread de props (...props) ya lleva todo lo relacionado a un botón (onCLick, handle, etc) = ponme el resto, que puede ser que mo lo pases o no, es algo opcional, es por ello que siempre va al final del todo. Sin embargo, dentro de la etiqueta button, el spread del props va delante para que no sobreescriba el resto, si pusiéramos className delante de props, este sobreescribiría la clase que tuviera.

//? 2.- Tipar componente: FuncionalComponent -> decirle que tiene unas props con un tipado -> se dice con los <> y dentro el botón con los tipados.

//? 3.- Error: Type '({ children, className, ...props }: ButtonProps) => void' is not assignable to type 'FC<ButtonProps> -> VOID es cuando necesita un RETURN.

//? 4.- Cambiamos el tag button por el de ButtonStyled apra que pille los estilos dados = rapper.
