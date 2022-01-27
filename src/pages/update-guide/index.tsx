import React, { useState, useRef, useEffect, ChangeEventHandler } from 'react';
import validateInput from './validator';
import { Button, Box, Grid, InputLabel, InputBase } from '@mui/material';
import styles from './styles';
import CardGuidesResponse, { postGuides, putGuides, getGuideById, updateGuides } from '@services/guides';
import Notification from '@components/Notification';
import AccessibilityTypography from '@components/AccessibilityTypography';
import { useParams } from 'react-router-dom';

export interface UpdateGuideProps {
}

export interface UpdateGuideInterface {
  title: string;
  content: string;
  id: string;
}

export const UpdateGuide: React.FC<UpdateGuideProps> = (): JSX.Element => {
  const title = useRef<HTMLInputElement>();
  const description = useRef<HTMLInputElement>();
  let parametros = useParams();   
  let id: string = parametros.id!;
  //id = '61e81cc731b050d6bd6362d2';
  //const id = useRef<HTMLInputElement>();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  // const [editar, setEditar] = useState<UpdateGuideInterface>({
  //   title: '',
  //   content: '',
  //   id: '',
  // });
  const [cards, setCards] = useState<CardGuidesResponse>();
  const [loading, setLoading] = useState(true);
  

  async function getGuidesService(id:string) {
    try {
      const { data } = await getGuideById(id);
      setCards(data.data);
      setError(false);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getGuidesService(id);
  }, );


  

  
//   const editar(({routeParams}) => {
//     const id = routeParams.UpdateGuideInterface;
//     Meteor.subscribe('id');
//     return {
//         id: id.findOne({id: id}), 
//     };
// }, id);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    const cardBody = {
      title: title.current?.value || '',
      content: description.current?.value || '',
    };

    try{
      await validateInput(cardBody);
      await updateGuides('id');
      await postGuides(cardBody)
      setSuccess(true)

    }catch{
      //setErrorMessage(error.message);
      setError(true);
    }

    


    // try {
    //   await validateInput(cardBody);
    //   await putGuides(cardBody);
    //   setSuccess(true);
    // } catch (error: any) {
    //   setErrorMessage(error.message);
    //   setError(true);
    // }

    // title.current!.value = '';
    // description.current!.value = '';
  }

  return (
    <>
      <Grid
        container
        alignItems={'center'}
        justifyContent={'center'}
        role="main"
      >
        <Grid item md={6} component="section">
          <Box sx={styles.header} component="header">
            <AccessibilityTypography sx={styles.headerTitle}>
              ATUALIZAR GUIA
            </AccessibilityTypography>
          </Box>
          <Box padding={'1rem 3rem'} sx={styles.content} component="section">
            <Button
              variant="contained"
              sx={styles.buttonDigitalContent}
              role="button"
            >
              Buscar conteúdo digital
            </Button>
            <Box
              component="form"
              onSubmit={handleSubmit}
              flexDirection={'column'}
              display={'flex'}
            >
              <InputLabel
                htmlFor="titulo"
                id="tituloLabel"
                sx={styles.labelInput}
              >
                <AccessibilityTypography>Título:</AccessibilityTypography>
              </InputLabel>
              <InputBase
                inputRef={title}
                type="text"
                value={cards?.title}
                id="titulo"
                name="titulo"
                role="input"
                required
                aria-labelledby="tituloLabel"
                sx={styles.input}
              />
              <InputLabel
                htmlFor="descricao"
                sx={styles.labelInput}
                id="descricaoLabel"
              >
                <AccessibilityTypography>Descrição:</AccessibilityTypography>
              </InputLabel>
              <InputBase
                inputRef={description}
                value={cards?.content}
                multiline={true}
                minRows={5}
                role="input"
                id="descricao"
                name="descricao"
                aria-labelledby="descricaoLabel"
                required
                sx={styles.input}
              />
              <Grid
                container
                justifyContent={'space-evenly'}
                alignItems={'center'}
              >
                <Grid item md={6} sx={styles.buttonWrapper}>
                  <Button
                    sx={styles.button}
                    variant="contained"
                    type="submit"
                    role="button"
                  >
                    Atualizar
                  </Button>
                </Grid>
                <Grid item md={6} sx={styles.buttonWrapper}>
                  <Button
                    sx={styles.button}
                    variant="contained"
                    type="reset"
                    role="button"
                    data-testid="back"
                    href="/admin"
                  >
                    Voltar
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
      {error && (
        <Notification
          message={`${errorMessage} 🤔`}
          variant="error"
          onClose={() => {
            setError(false);
            setErrorMessage('');
          }}
        >
          erro
        </Notification>
      )}
      {success && (
        <Notification
          message="Cadastro realizado com sucesso! ✔"
          variant="success"
          onClose={() => {
            setSuccess(false);
          }}
        >
          sucesso
        </Notification>
      )}
    </>
  );
};

export default UpdateGuide;
