export const userTypeMinOptions = [
  {key: 0, display_name: 'Internal User'},
  {key: 1, display_name: 'Agent User'},
]

export const userTypeOptions = [
  {key: 0, display_name: 'Internal User'},
  {key: 1, display_name: 'Master Agent'},
  {key: 2, display_name: 'Agent'},
]

export const userTypeOptionsMap = {
  0: 'Internal User',
  1: 'Master Agent',
  2: 'Agent'
}

export const agentTypeOptions = [
  {key: 0, display_name: 'Individual'},
  {key: 1, display_name: 'Company'},
]

export const agentTypeOptionsMap = {
  0: 'Individual',
  1: 'Company',
}

export const agentLevelOptions = [
  {key: 1, display_name: 'gold'},
  {key: 2, display_name: 'silver'},
  {key: 3, display_name: 'copper'},
]

export const agentStatusOptions = [
  {key: 0, display_name: 'pending'},
  {key: 1, display_name: 'approved'},
  {key: 2, display_name: 'rejected'},
]

export const permissionTypeOptions = [
  {key: 0, display_name: 'View only'},
  {key: 2, display_name: 'Manager'},
]

export const commonStatusOptions = [
  {key: 0, display_name: 'Inactive'},
  {key: 1, display_name: 'Active'},
]
export const commonStatusFilter = (status) => {
  const statusMap = {
    true: {el_type: 'success', display_name: 'Active'},
    false: {el_type: 'danger', display_name: 'Inactive'},
  }
  return statusMap[status]
}