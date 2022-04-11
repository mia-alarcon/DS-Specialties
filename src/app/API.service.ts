/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type __SubscriptionContainer = {
  onCreateTimesheet: OnCreateTimesheetSubscription;
  onUpdateTimesheet: OnUpdateTimesheetSubscription;
  onDeleteTimesheet: OnDeleteTimesheetSubscription;
  onCreateEmployee: OnCreateEmployeeSubscription;
  onUpdateEmployee: OnUpdateEmployeeSubscription;
  onDeleteEmployee: OnDeleteEmployeeSubscription;
};

export type CreateTimesheetInput = {
  id?: string | null;
  employeeID: string;
  firstName: string;
  clockIn?: string | null;
  clockOut?: string | null;
};

export type ModelTimesheetConditionInput = {
  employeeID?: ModelStringInput | null;
  firstName?: ModelStringInput | null;
  clockIn?: ModelStringInput | null;
  clockOut?: ModelStringInput | null;
  and?: Array<ModelTimesheetConditionInput | null> | null;
  or?: Array<ModelTimesheetConditionInput | null> | null;
  not?: ModelTimesheetConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type Timesheet = {
  __typename: "Timesheet";
  id: string;
  employeeID: string;
  firstName: string;
  clockIn?: string | null;
  clockOut?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateTimesheetInput = {
  id: string;
  employeeID?: string | null;
  firstName?: string | null;
  clockIn?: string | null;
  clockOut?: string | null;
};

export type DeleteTimesheetInput = {
  id: string;
};

export type CreateEmployeeInput = {
  id?: string | null;
  employeeID: string;
  firstName: string;
  lastName: string;
  phoneNum: string;
  address: string;
  email: string;
};

export type ModelEmployeeConditionInput = {
  employeeID?: ModelStringInput | null;
  firstName?: ModelStringInput | null;
  lastName?: ModelStringInput | null;
  phoneNum?: ModelStringInput | null;
  address?: ModelStringInput | null;
  email?: ModelStringInput | null;
  and?: Array<ModelEmployeeConditionInput | null> | null;
  or?: Array<ModelEmployeeConditionInput | null> | null;
  not?: ModelEmployeeConditionInput | null;
};

export type Employee = {
  __typename: "Employee";
  id: string;
  employeeID: string;
  firstName: string;
  lastName: string;
  phoneNum: string;
  address: string;
  email: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateEmployeeInput = {
  id: string;
  employeeID?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  phoneNum?: string | null;
  address?: string | null;
  email?: string | null;
};

export type DeleteEmployeeInput = {
  id: string;
};

export type ModelTimesheetFilterInput = {
  id?: ModelIDInput | null;
  employeeID?: ModelStringInput | null;
  firstName?: ModelStringInput | null;
  clockIn?: ModelStringInput | null;
  clockOut?: ModelStringInput | null;
  and?: Array<ModelTimesheetFilterInput | null> | null;
  or?: Array<ModelTimesheetFilterInput | null> | null;
  not?: ModelTimesheetFilterInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type ModelTimesheetConnection = {
  __typename: "ModelTimesheetConnection";
  items: Array<Timesheet | null>;
  nextToken?: string | null;
};

export type ModelEmployeeFilterInput = {
  id?: ModelIDInput | null;
  employeeID?: ModelStringInput | null;
  firstName?: ModelStringInput | null;
  lastName?: ModelStringInput | null;
  phoneNum?: ModelStringInput | null;
  address?: ModelStringInput | null;
  email?: ModelStringInput | null;
  and?: Array<ModelEmployeeFilterInput | null> | null;
  or?: Array<ModelEmployeeFilterInput | null> | null;
  not?: ModelEmployeeFilterInput | null;
};

export type ModelEmployeeConnection = {
  __typename: "ModelEmployeeConnection";
  items: Array<Employee | null>;
  nextToken?: string | null;
};

export type CreateTimesheetMutation = {
  __typename: "Timesheet";
  id: string;
  employeeID: string;
  firstName: string;
  clockIn?: string | null;
  clockOut?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateTimesheetMutation = {
  __typename: "Timesheet";
  id: string;
  employeeID: string;
  firstName: string;
  clockIn?: string | null;
  clockOut?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteTimesheetMutation = {
  __typename: "Timesheet";
  id: string;
  employeeID: string;
  firstName: string;
  clockIn?: string | null;
  clockOut?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateEmployeeMutation = {
  __typename: "Employee";
  id: string;
  employeeID: string;
  firstName: string;
  lastName: string;
  phoneNum: string;
  address: string;
  email: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateEmployeeMutation = {
  __typename: "Employee";
  id: string;
  employeeID: string;
  firstName: string;
  lastName: string;
  phoneNum: string;
  address: string;
  email: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteEmployeeMutation = {
  __typename: "Employee";
  id: string;
  employeeID: string;
  firstName: string;
  lastName: string;
  phoneNum: string;
  address: string;
  email: string;
  createdAt: string;
  updatedAt: string;
};

export type GetTimesheetQuery = {
  __typename: "Timesheet";
  id: string;
  employeeID: string;
  firstName: string;
  clockIn?: string | null;
  clockOut?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListTimesheetsQuery = {
  __typename: "ModelTimesheetConnection";
  items: Array<{
    __typename: "Timesheet";
    id: string;
    employeeID: string;
    firstName: string;
    clockIn?: string | null;
    clockOut?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type GetEmployeeQuery = {
  __typename: "Employee";
  id: string;
  employeeID: string;
  firstName: string;
  lastName: string;
  phoneNum: string;
  address: string;
  email: string;
  createdAt: string;
  updatedAt: string;
};

export type ListEmployeesQuery = {
  __typename: "ModelEmployeeConnection";
  items: Array<{
    __typename: "Employee";
    id: string;
    employeeID: string;
    firstName: string;
    lastName: string;
    phoneNum: string;
    address: string;
    email: string;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type OnCreateTimesheetSubscription = {
  __typename: "Timesheet";
  id: string;
  employeeID: string;
  firstName: string;
  clockIn?: string | null;
  clockOut?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateTimesheetSubscription = {
  __typename: "Timesheet";
  id: string;
  employeeID: string;
  firstName: string;
  clockIn?: string | null;
  clockOut?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteTimesheetSubscription = {
  __typename: "Timesheet";
  id: string;
  employeeID: string;
  firstName: string;
  clockIn?: string | null;
  clockOut?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateEmployeeSubscription = {
  __typename: "Employee";
  id: string;
  employeeID: string;
  firstName: string;
  lastName: string;
  phoneNum: string;
  address: string;
  email: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateEmployeeSubscription = {
  __typename: "Employee";
  id: string;
  employeeID: string;
  firstName: string;
  lastName: string;
  phoneNum: string;
  address: string;
  email: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteEmployeeSubscription = {
  __typename: "Employee";
  id: string;
  employeeID: string;
  firstName: string;
  lastName: string;
  phoneNum: string;
  address: string;
  email: string;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateTimesheet(
    input: CreateTimesheetInput,
    condition?: ModelTimesheetConditionInput
  ): Promise<CreateTimesheetMutation> {
    const statement = `mutation CreateTimesheet($input: CreateTimesheetInput!, $condition: ModelTimesheetConditionInput) {
        createTimesheet(input: $input, condition: $condition) {
          __typename
          id
          employeeID
          firstName
          clockIn
          clockOut
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateTimesheetMutation>response.data.createTimesheet;
  }
  async UpdateTimesheet(
    input: UpdateTimesheetInput,
    condition?: ModelTimesheetConditionInput
  ): Promise<UpdateTimesheetMutation> {
    const statement = `mutation UpdateTimesheet($input: UpdateTimesheetInput!, $condition: ModelTimesheetConditionInput) {
        updateTimesheet(input: $input, condition: $condition) {
          __typename
          id
          employeeID
          firstName
          clockIn
          clockOut
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateTimesheetMutation>response.data.updateTimesheet;
  }
  async DeleteTimesheet(
    input: DeleteTimesheetInput,
    condition?: ModelTimesheetConditionInput
  ): Promise<DeleteTimesheetMutation> {
    const statement = `mutation DeleteTimesheet($input: DeleteTimesheetInput!, $condition: ModelTimesheetConditionInput) {
        deleteTimesheet(input: $input, condition: $condition) {
          __typename
          id
          employeeID
          firstName
          clockIn
          clockOut
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteTimesheetMutation>response.data.deleteTimesheet;
  }
  async CreateEmployee(
    input: CreateEmployeeInput,
    condition?: ModelEmployeeConditionInput
  ): Promise<CreateEmployeeMutation> {
    const statement = `mutation CreateEmployee($input: CreateEmployeeInput!, $condition: ModelEmployeeConditionInput) {
        createEmployee(input: $input, condition: $condition) {
          __typename
          id
          employeeID
          firstName
          lastName
          phoneNum
          address
          email
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateEmployeeMutation>response.data.createEmployee;
  }
  async UpdateEmployee(
    input: UpdateEmployeeInput,
    condition?: ModelEmployeeConditionInput
  ): Promise<UpdateEmployeeMutation> {
    const statement = `mutation UpdateEmployee($input: UpdateEmployeeInput!, $condition: ModelEmployeeConditionInput) {
        updateEmployee(input: $input, condition: $condition) {
          __typename
          id
          employeeID
          firstName
          lastName
          phoneNum
          address
          email
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateEmployeeMutation>response.data.updateEmployee;
  }
  async DeleteEmployee(
    input: DeleteEmployeeInput,
    condition?: ModelEmployeeConditionInput
  ): Promise<DeleteEmployeeMutation> {
    const statement = `mutation DeleteEmployee($input: DeleteEmployeeInput!, $condition: ModelEmployeeConditionInput) {
        deleteEmployee(input: $input, condition: $condition) {
          __typename
          id
          employeeID
          firstName
          lastName
          phoneNum
          address
          email
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteEmployeeMutation>response.data.deleteEmployee;
  }
  async GetTimesheet(id: string): Promise<GetTimesheetQuery> {
    const statement = `query GetTimesheet($id: ID!) {
        getTimesheet(id: $id) {
          __typename
          id
          employeeID
          firstName
          clockIn
          clockOut
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetTimesheetQuery>response.data.getTimesheet;
  }
  async ListTimesheets(
    filter?: ModelTimesheetFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListTimesheetsQuery> {
    const statement = `query ListTimesheets($filter: ModelTimesheetFilterInput, $limit: Int, $nextToken: String) {
        listTimesheets(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            employeeID
            firstName
            clockIn
            clockOut
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListTimesheetsQuery>response.data.listTimesheets;
  }
  async GetEmployee(id: string): Promise<GetEmployeeQuery> {
    const statement = `query GetEmployee($id: ID!) {
        getEmployee(id: $id) {
          __typename
          id
          employeeID
          firstName
          lastName
          phoneNum
          address
          email
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetEmployeeQuery>response.data.getEmployee;
  }
  async ListEmployees(
    filter?: ModelEmployeeFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListEmployeesQuery> {
    const statement = `query ListEmployees($filter: ModelEmployeeFilterInput, $limit: Int, $nextToken: String) {
        listEmployees(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            employeeID
            firstName
            lastName
            phoneNum
            address
            email
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListEmployeesQuery>response.data.listEmployees;
  }
  OnCreateTimesheetListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateTimesheet">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateTimesheet {
        onCreateTimesheet {
          __typename
          id
          employeeID
          firstName
          clockIn
          clockOut
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateTimesheet">>
  >;

  OnUpdateTimesheetListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateTimesheet">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateTimesheet {
        onUpdateTimesheet {
          __typename
          id
          employeeID
          firstName
          clockIn
          clockOut
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateTimesheet">>
  >;

  OnDeleteTimesheetListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteTimesheet">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteTimesheet {
        onDeleteTimesheet {
          __typename
          id
          employeeID
          firstName
          clockIn
          clockOut
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteTimesheet">>
  >;

  OnCreateEmployeeListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateEmployee">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateEmployee {
        onCreateEmployee {
          __typename
          id
          employeeID
          firstName
          lastName
          phoneNum
          address
          email
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateEmployee">>
  >;

  OnUpdateEmployeeListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateEmployee">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateEmployee {
        onUpdateEmployee {
          __typename
          id
          employeeID
          firstName
          lastName
          phoneNum
          address
          email
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateEmployee">>
  >;

  OnDeleteEmployeeListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteEmployee">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteEmployee {
        onDeleteEmployee {
          __typename
          id
          employeeID
          firstName
          lastName
          phoneNum
          address
          email
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteEmployee">>
  >;
}
