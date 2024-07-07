export function navigateToWithCurrent(
  path: string,
  additionalQuery: Record<string, string> = {},
) {
  const query = { ...useRouter().currentRoute.value.query }

  Object.keys(additionalQuery).forEach((key) => {
    // Удаляем старое значение, если оно есть
    if (Object.prototype.hasOwnProperty.call(query, key))
      delete query[key]

    // Добавляем новое значение, если оно есть
    if (additionalQuery[key])
      query[key] = additionalQuery[key]
  })

  return navigateTo({ path, query })
}
