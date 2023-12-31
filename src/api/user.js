import request from '@/utils/request';

export function login(data) {
  return request({
    url: '/user/login',
    method: 'post',
    data,
  });
}

export function getInfo(token) {
  return request({
    url: '/user',
    method: 'get',
  });
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post',
  });
}

export function changePassword(data) {
  return request({
    url: '/user/change_password',
    method: 'post',
    data,
  });
}

export function getListPlayers(params) {
  return request({
    url: '/admin/list_user',
    method: 'get',
    params,
  });
}

export function getUserDetail(params) {
  return request({
    url: `/admin/user/${params}`,
    method: 'get',
  });
}
