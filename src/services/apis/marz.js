import client from '../main-client';

export const getMarz = data => client().get('/Marz', data);
export const getBmo = data => client().get('/BMO', data);
export const getPermits = ({ bmoid, year, ...data }) =>
  client().get(`/main/${bmoid}/${year}`, data);
export const getIntakeDischargePoints = ({ bmoid, ...data }) =>
  client().get(`/intake-discharge-points/${bmoid}`, data);
export const getDataWaterintake = ({ bmoid, year, ...data }) =>
  client().get(`/datawaterintake/${bmoid}/${year}`, data);
export const getDataWaterDischarge = ({ bmoid, year, ...data }) =>
  client().get(`/datawaterdischarge/${bmoid}/${year}`, data);
