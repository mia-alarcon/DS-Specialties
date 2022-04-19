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
  employeeID: string;
  firstName: string;
  lastName: string;
  clockIn?: string | null;
  clockOut?: string | null;
  day?: string | null;
};

export type ModelTimesheetConditionInput = {
  firstName?: ModelStringInput | null;
  lastName?: ModelStringInput | null;
  clockIn?: ModelStringInput | null;
  clockOut?: ModelStringInput | null;
  day?: ModelStringInput | null;
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
  employeeID: string;
  firstName: string;
  lastName: string;
  clockIn?: string | null;
  clockOut?: string | null;
  day?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateTimesheetInput = {
  employeeID: string;
  firstName?: string | null;
  lastName?: string | null;
  clockIn?: string | null;
  clockOut?: string | null;
  day?: string | null;
};

export type DeleteTimesheetInput = {
  employeeID: string;
};

export type CreateEmployeeInput = {
  employeeID: string;
  firstName: string;
  lastName: string;
  phoneNum: string;
  address: string;
  email: string;
};

export type ModelEmployeeConditionInput = {
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
  employeeID: string;
  firstName?: string | null;
  lastName?: string | null;
  phoneNum?: string | null;
  address?: string | null;
  email?: string | null;
};

export type DeleteEmployeeInput = {
  employeeID: string;
};

export type ModelTimesheetFilterInput = {
  employeeID?: ModelStringInput | null;
  firstName?: ModelStringInput | null;
  lastName?: ModelStringInput | null;
  clockIn?: ModelStringInput | null;
  clockOut?: ModelStringInput | null;
  day?: ModelStringInput | null;
  and?: Array<ModelTimesheetFilterInput | null> | null;
  or?: Array<ModelTimesheetFilterInput | null> | null;
  not?: ModelTimesheetFilterInput | null;
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC"
}

export type ModelTimesheetConnection = {
  __typename: "ModelTimesheetConnection";
  items: Array<Timesheet | null>;
  nextToken?: string | null;
};

export type ModelEmployeeFilterInput = {
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
  employeeID: string;
  firstName: string;
  lastName: string;
  clockIn?: string | null;
  clockOut?: string | null;
  day?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateTimesheetMutation = {
  __typename: "Timesheet";
  employeeID: string;
  firstName: string;
  lastName: string;
  clockIn?: string | null;
  clockOut?: string | null;
  day?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteTimesheetMutation = {
  __typename: "Timesheet";
  employeeID: string;
  firstName: string;
  lastName: string;
  clockIn?: string | null;
  clockOut?: string | null;
  day?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateEmployeeMutation = {
  __typename: "Employee";
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
  employeeID: string;
  firstName: string;
  lastName: string;
  clockIn?: string | null;
  clockOut?: string | null;
  day?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListTimesheetsQuery = {
  __typename: "ModelTimesheetConnection";
  items: Array<{
    __typename: "Timesheet";
    employeeID: string;
    firstName: string;
    lastName: string;
    clockIn?: string | null;
    clockOut?: string | null;
    day?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type GetEmployeeQuery = {
  __typename: "Employee";
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
  employeeID: string;
  firstName: string;
  lastName: string;
  clockIn?: string | null;
  clockOut?: string | null;
  day?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateTimesheetSubscription = {
  __typename: "Timesheet";
  employeeID: string;
  firstName: string;
  lastName: string;
  clockIn?: string | null;
  clockOut?: string | null;
  day?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteTimesheetSubscription = {
  __typename: "Timesheet";
  employeeID: string;
  firstName: string;
  lastName: string;
  clockIn?: string | null;
  clockOut?: string | null;
  day?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateEmployeeSubscription = {
  __typename: "Employee";
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
          employeeID
          firstName
          lastName
          clockIn
          clockOut
          day
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
          employeeID
          firstName
          lastName
          clockIn
          clockOut
          day
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
          employeeID
          firstName
          lastName
          clockIn
          clockOut
          day
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
  async GetTimesheet(employeeID: string): Promise<GetTimesheetQuery> {
    const statement = `query GetTimesheet($employeeID: String!) {
        getTimesheet(employeeID: $employeeID) {
          __typename
          employeeID
          firstName
          lastName
          clockIn
          clockOut
          day
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      employeeID
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetTimesheetQuery>response.data.getTimesheet;
  }
  async ListTimesheets(
    employeeID?: string,
    filter?: ModelTimesheetFilterInput,
    limit?: number,
    nextToken?: string,
    sortDirection?: ModelSortDirection
  ): Promise<ListTimesheetsQuery> {
    const statement = `query ListTimesheets($employeeID: String, $filter: ModelTimesheetFilterInput, $limit: Int, $nextToken: String, $sortDirection: ModelSortDirection) {
        listTimesheets(employeeID: $employeeID, filter: $filter, limit: $limit, nextToken: $nextToken, sortDirection: $sortDirection) {
          __typename
          items {
            __typename
            employeeID
            firstName
            lastName
            clockIn
            clockOut
            day
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (employeeID) {
      gqlAPIServiceArguments.employeeID = employeeID;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListTimesheetsQuery>response.data.listTimesheets;
  }
  async GetEmployee(employeeID: string): Promise<GetEmployeeQuery> {
    const statement = `query GetEmployee($employeeID: String!) {
        getEmployee(employeeID: $employeeID) {
          __typename
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
      employeeID
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetEmployeeQuery>response.data.getEmployee;
  }
  async ListEmployees(
    employeeID?: string,
    filter?: ModelEmployeeFilterInput,
    limit?: number,
    nextToken?: string,
    sortDirection?: ModelSortDirection
  ): Promise<ListEmployeesQuery> {
    const statement = `query ListEmployees($employeeID: String, $filter: ModelEmployeeFilterInput, $limit: Int, $nextToken: String, $sortDirection: ModelSortDirection) {
        listEmployees(employeeID: $employeeID, filter: $filter, limit: $limit, nextToken: $nextToken, sortDirection: $sortDirection) {
          __typename
          items {
            __typename
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
    if (employeeID) {
      gqlAPIServiceArguments.employeeID = employeeID;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
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
          employeeID
          firstName
          lastName
          clockIn
          clockOut
          day
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
          employeeID
          firstName
          lastName
          clockIn
          clockOut
          day
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
          employeeID
          firstName
          lastName
          clockIn
          clockOut
          day
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
