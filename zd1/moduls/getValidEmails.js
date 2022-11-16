function getValidEmails(list1, list2) {
    return list1.filter((mail) => !list2.includes(mail));
  }

export default getValidEmails