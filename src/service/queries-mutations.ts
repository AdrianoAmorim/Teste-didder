export const createExampleTableDashboardGQL = `
  mutation CREATE_EXAMPLE_TABLE_DASHBOARD(
    $typeText: String!
    $typeBoolean: Boolean!
    $typeInt: Int!
    $typeDatetime: String!
    $typeEnum: TypeEnum!
    $exampleOtherOneId: Int!
    $exampleOtherTwoId: Int!
    $typeDecimal: Float!
    $typeCurrency: Float!
    $email: String
    $phone: String
  ) {
    createExampleTableDashboard(
      typeText: $typeText
      typeBoolean: $typeBoolean
      typeInt: $typeInt
      typeDatetime: $typeDatetime
      typeEnum: $typeEnum
      exampleOtherOneId: $exampleOtherOneId
      exampleOtherTwoId: $exampleOtherTwoId
      typeDecimal: $typeDecimal
      typeCurrency: $typeCurrency
      email: $email
      phone: $phone
    ) {
      error
      status
      data {
        id
        typeText
        typeBoolean
        typeInt
        typeDatetime
        typeEnum
        exampleOtherOneId
        exampleOtherOne {
          id
          name
        }
        exampleOtherTwoId
        exampleOtherTwo {
          id
          name
        }
        typeDecimal
        typeCurrency
        email
        phone
        active
        deleted
        createdAt
        updatedAt
      }
    }
  }
`;

export const getExamplesTablesDashboardGQL = `
  query GET_EXAMPLES_TABLES_DASHBOARD(
    $take: Int
    $skip: Int
    $typeText: String
    $typeBoolean: Boolean
    $typeInt: Int
    $typeDatetime: String
    $typeEnum: TypeEnum
    $exampleOtherOneId: Int
    $exampleOtherTwoId: Int
    $typeDecimal: Float
    $typeCurrency: Float
    $email: String
    $phone: String
    $active: Boolean
    $deleted: Boolean
  ) {
    getExamplesTablesDashboard(
      take: $take
      skip: $skip
      typeText: $typeText
      typeBoolean: $typeBoolean
      typeInt: $typeInt
      typeDatetime: $typeDatetime
      typeEnum: $typeEnum
      exampleOtherOneId: $exampleOtherOneId
      exampleOtherTwoId: $exampleOtherTwoId
      typeDecimal: $typeDecimal
      typeCurrency: $typeCurrency
      email: $email
      phone: $phone
      active: $active
      deleted: $deleted
    ) {
      error
      status
      totalPages
      data {
        id
        typeText
        typeBoolean
        typeInt
        typeDatetime
        typeEnum
        exampleOtherOneId
        exampleOtherOne {
          id
          name
        }
        exampleOtherTwoId
        exampleOtherTwo {
          id
          name
        }
        typeDecimal
        typeCurrency
        email
        phone
        active
        deleted
        createdAt
        updatedAt
      }
    }
  }
`;
export const getExamplesOthersOnesDashboardGQL = `
  query GET_EXAMPLES_OTHERS_ONES_DASHBOARD(
    $take: Int
    $skip: Int
    $active: Boolean
    $deleted: Boolean
  ) {
    getExamplesOthersOnesDashboard(
      take: $take
      skip: $skip
      active: $active
      deleted: $deleted
    ) {
      error
      status
      data {
        id
        name
        active
        deleted
        createdAt
        updatedAt
      }
    }
  }
`;

export const getExamplesOthersTwosDashboardGQL = `
  query GET_EXAMPLES_OTHERS_TWOS_DASHBOARD(
    $take: Int
    $skip: Int
    $active: Boolean
    $deleted: Boolean
  ) {
    getExamplesOthersTwosDashboard(
      take: $take
      skip: $skip
      active: $active
      deleted: $deleted
    ) {
      error
      status
      data {
        id
        name
        active
        deleted
        createdAt
        updatedAt
      }
    }
  }
`;

export const updateExampleTableDashboardGQL = `
  mutation UPDATE_EXAMPLE_TABLE_DASHBOARD(
    $exampleTableId: Int!
    $typeText: String
    $typeBoolean: Boolean
    $typeInt: Int
    $typeDatetime: String
    $typeEnum: TypeEnum
    $exampleOtherOneId: Int
    $exampleOtherTwoId: Int
    $typeDecimal: Float
    $typeCurrency: Float
    $email: String
    $phone: String
  ) {
    updateExampleTableDashboard(
      exampleTableId: $exampleTableId
      typeText: $typeText
      typeBoolean: $typeBoolean
      typeInt: $typeInt
      typeDatetime: $typeDatetime
      typeEnum: $typeEnum
      exampleOtherOneId: $exampleOtherOneId
      exampleOtherTwoId: $exampleOtherTwoId
      typeDecimal: $typeDecimal
      typeCurrency: $typeCurrency
      email: $email
      phone: $phone
    ) {
      error
      status
      data {
        id
        typeText
        typeBoolean
        typeInt
        typeDatetime
        typeEnum
        exampleOtherOneId
        exampleOtherOne {
          id
          name
        }
        exampleOtherTwoId
        exampleOtherTwo {
          id
          name
        }
        typeDecimal
        typeCurrency
        email
        phone
        active
        deleted
        createdAt
        updatedAt
      }
    }
  }
`;

export const deleteExampleTableDashboardGQL = `
  mutation DELETE_EXAMPLE_TABLE_DASHBOARD(
    $exampleTableId: Int!
    $deleted: Boolean!
  ) {
    deleteExampleTableDashboard(
      exampleTableId: $exampleTableId
      deleted: $deleted
    ) {
      error
      status
      data {
        id
        typeText
        typeBoolean
        typeInt
        typeDatetime
        typeEnum
        exampleOtherOneId
        exampleOtherOne {
          id
          name
        }
        exampleOtherTwoId
        exampleOtherTwo {
          id
          name
        }
        typeDecimal
        typeCurrency
        email
        phone
        active
        deleted
        createdAt
        updatedAt
      }
    }
  }
`;

export const loginDashboardGQL = `
mutation LOGIN($email: String!, $password: String!) {
	login(email: $email, password: $password) {
		error
		status
		error
		data {
			id
			appId
			username
			email
			phone
			token
			utc
			twoFactorEnabled
		}
	}
}
`;
