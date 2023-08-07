import { useForm } from "react-hook-form";
import { useState } from "react" 

export const FormContactComponent = () => {
  const [dataForm, setDataForm] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setDataForm(data);
    console.log(dataForm);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          width: "30%",
          padding: "0px 20px 20px 20px",
          margin: "30px 0px",
          display: "inline-block",
          border: "1px solid #ccc",
          boxSizing: "border-box",
          boxShadow: "2px 2px 4px #000000",
          borderRadius: "10px",
        }}
      >
        <h2>Deixe o seu recado</h2>

        <div
          style={{
            display: "flex",
            maxWidth: "100%",
            gap: "1rem",
            alignItems: "center",
            alignContent: "center",
            marginTop:"1.5rem"
          }}
        >
          <div
            style={{ display: "flex", flexDirection: "column", flexGrow: "1", flexShrink:"1", flexBasis:"0%" }}
          >
            <label>Nome</label>
            <input style={{height:"2.5rem"}} placeholder="Digite seu nome..." {...register("name",{required:true})} />
          </div>

          <div
            style={{ display: "flex", flexDirection: "column", flexGrow: "1", flexShrink:"1", flexBasis:"0%" }}
          >
            <label>Telefone</label>
            <input
            style={{height:"2.5rem"}}
              placeholder="Digite seu telefone..."
              {...register("telephone",{required:true})}
            />
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column",marginTop:"1.5rem"}}>
          <label>E-mail</label>
          <input style={{height:"2.5rem"}} placeholder="Digite seu email..." {...register("email",{required:true, validate:{matchPath: (v) => /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(v)}})} />
        </div>

        <div style={{ display: "flex", flexDirection: "column", marginTop:"1.5rem" }}>
          <label>Mensagem</label>
          <textarea
          style={{height:"5rem"}}
            placeholder="Digite sua mensagem..."
            {...register("message",{required:true})}
          />
        </div>

        <div style={{display:"flex", justifyContent:"end"}}>
          <button style={{marginTop:"1.5rem", borderRadius:"5px", background:"#F2A50C", border:"none"}} disabled={errors.name || errors.telephone || errors.email || errors.message} type="submit">
            Enviar
          </button>
        </div>
        
      </form>
    </div>
  );
};
