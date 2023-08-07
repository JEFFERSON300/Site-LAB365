import Card from 'react-bootstrap/Card';

export const CardContactComponent = () => {
  return (
    <div style={{display:"flex", justifyContent: "center", marginBottom:"2rem"}}>

    <Card style={{ width: '40%' }}>
    
    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14142.610463787822!2d-48.5097472!3d-27.60429765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1691423958583!5m2!1spt-BR!2sbr" style={{border:"0", maxWidth:"100%"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        
        <Card.Body>

        <Card.Title>Matriz</Card.Title>
        <div style={{display:"flex", width:"100%"}}>
        
        <div style={{flexGrow: "1",flexShrink:"1", flexBasis:"0%"}}>
          <Card.Text>
            Rua das Cabras, 99 - Bairro Novo
          </Card.Text>
          
          <Card.Text>
            Santa Catarina - SC
          </Card.Text>
        </div>
        
        <div style={{flexGrow: "1",flexShrink:"1", flexBasis:"0%"}}>
          <Card.Text>
            +55 31 99999-9999
          </Card.Text>
          
          <Card.Text>
            contato@suaempresa.com
          </Card.Text>
        </div>
        </div>
        
        
        </Card.Body>

      </Card>
      
      
    </div>
  );
};
