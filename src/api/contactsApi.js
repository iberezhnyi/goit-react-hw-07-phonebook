import api from './api';

export const fetchAllContacts = async () => {
  const { data } = await api('contacts');

  return data;
};

export const createContact = async body => {
  const { data } = await api.post(`contacts`, body);

  return data;
};

export const deleteContact = async contactId => {
  const { data } = await api.delete(`contacts/${contactId}`);

  return data;
};
