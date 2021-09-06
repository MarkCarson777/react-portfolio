import destiny from '../apis/destiny';

export const fetchData = () => async dispatch => {
  const response = await destiny.get('/App.GetApplicationApiUsage');
  console.log(response);
};