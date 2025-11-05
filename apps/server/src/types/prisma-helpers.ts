export interface IWherePayload<T, W> {
  query?: T
  where?: W
}

export interface IUpdatePayload<T, W, D> extends Pick<IWherePayload<T, W>, 'query'> {
  where: W
  data: D
}

export interface IReadPayload<Q, W> {
  query?: Q
  where?: W
}
