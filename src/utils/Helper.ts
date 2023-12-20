export default class Helper{
     public static somenteNumeros(input: HTMLInputElement){
          // Padrão regex para validar números
          const regex = /^[0-9]+$/;

          // Obtém o valor digitado no input
          const valor = input.value;

          // Valida o valor digitado
          if (!regex.test(valor)) {
               // Se o valor digitado não for válido, limpa o input
               input.value = "";
          }
     }
}