import React, { useState, useEffect } from 'react'
import { format } from 'date-fns'

import api from './../../services/api'

import { Section, Title, Celebration, Modal, ModalContent, Form, Button, Subtitle } from './styles'
import logo from './../../assets/logo-paroquia-santo-antonio.png'

const Home = () => {
  const [name, setName] = useState('')
  const [celebrations, setCelebrations] = useState([])
  const [modalVisibility, setModalVisibility] = useState(false)
  const [loading, setloading] = useState(true)

  useEffect(() => {
    api.get('/celebrations').then((response) => {
      setCelebrations(response.data)
      setloading(false)
    }).catch((err) => {
      console.log(err)
    })
  }, [modalVisibility])

  async function handleReserve(id) {
    if (!name) {
      alert('Preencha seu nome')
      return
    }

    const data = {
      celebration_id: id,
      person: {
        name
      }
    }

    try {
      await api.post('/celebrations/reserve', data)
      
      setModalVisibility(true)
      setName('')
    } catch(err) {
      console.log(err.response.data)
    }
  }

  return (
    <>
      <Section>
        <img src={logo} alt="Logo Paróquia Santo Antônio, Piquete - SP" style={{ display: 'block', margin: '0 auto 40px', maxWidth: '300px' }} />

        <Title>Agende aqui um horário para participar da Santa Missa</Title>

        <Subtitle>Primeiro, digite seu nome completo:</Subtitle>

        <Form onSubmit={(event) => event.preventDefault()}>
          <input
            type="text"
            placeholder="Digite seu nome completo"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </Form>

        <Subtitle>Agora, selecione o horário que deseja participar:</Subtitle>

        { loading && <p style={{ textAlign: 'center' }}>Carregando missas...</p> }

        {celebrations.map((celebration, index) => (
          <Celebration key={celebration._id}>
            <div>
              <h2>{celebration.church}</h2>
              <p>
                { format(new Date(celebration.date), 'dd/MM/yyyy H:mm') }
              </p>
              { 
                celebration.vacancies > celebration.vacancies_reserved && 
                <p>Restam {celebration.vacancies - celebration.vacancies_reserved} vagas</p> 
              }
            </div>
            
            { 
              celebration.vacancies > celebration.vacancies_reserved 
              ? <Button onClick={() => handleReserve(celebration._id, index)}>Agendar</Button> 
              : <p>Vagas esgotadas</p> 
            }
          </Celebration>
        ))}
      </Section>

      <Modal modalVisibility={modalVisibility}>
        <ModalContent modalVisibility={modalVisibility}>
          <h3>Obrigado,</h3>
          <h3>Você reservou sua vaga!</h3>
          
          <p>Algumas orientações para o dia:</p>

          <ul>
            <li>- Chegue com 30 minutos de antecedência.⁣</li>
            <li>- O uso de máscara é obrigatório.⁣</li>
            <li>- Use álcool em gel (disponível na porta de entrada).⁣</li>
            <li>- Não será possível usar o bebedouro (leve uma garrafa de água).⁣</li>
            <li>- Respeite o distanciamento de 2 metros.⁣</li>
            <li>- Comungue na mão.⁣</li>
            <li>- Após a Santa Missa, não poderá haver aglomerações.</li>
          </ul>

          <Button primary={true} onClick={() => setModalVisibility(false)}>Ok, entendi</Button>
        </ModalContent>
      </Modal>
    </>
  )
}

export default Home