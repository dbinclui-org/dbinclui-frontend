import api from './api';

export interface CardGuidesResponse {
  id?: number;
  title: string;
  content: string;
}

export const getGuides = async () => {
  try {
    return api.get<{
      data: CardGuidesResponse[];
    }>(`accessibility-guide`);
  } catch {
    throw new Error('Serviço não disponível');
  }
};

export const postGuides = async (title:string, content:string) => {
  try{
    return api.post('/register', {
      title:title,
      content:content
    }).then((response) => {
      console.log(response);
    })


  }catch(e){
    console.log(e)

  }
}

