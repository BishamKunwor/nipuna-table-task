export const columnDetails = [
  // { dataIndex: 'name', title: 'Name', width: 171 },
  { dataIndex: "name", title: "Name", width: 210 },
  { dataIndex: "addedFrom", title: "Added From", width: 121 },
  { dataIndex: "tags", title: "Tags", width: 81 },
  { dataIndex: "internalId", title: "Internal ID", width: 111 },
  { dataIndex: "clientId", title: "Client ID", width: 101 },
  { dataIndex: "phone", title: "Phone", width: 90 },
  { dataIndex: "clientPortal", title: "Client Portal", width: 124 },
  { dataIndex: "assignee", title: "Assignee", width: 183 },
  { dataIndex: "followers", title: "Followers", width: 108 },
  { dataIndex: "status", title: "Status", width: 91 },
  { dataIndex: "applications", title: "Applications", width: 125 },
  { dataIndex: "lastUpdated", title: "Last Updated", width: 131 },
  { dataIndex: "addColumns", title: "", width: 81 },
];

export default function generateDataSource() {
  const dataSource = [];
  for (let i = 0; i < 6; i++) {
    dataSource.push({
      key: i,
      name: "Bisham Kunwor",
      email: "novelian.nova@gmail.com",
      imageUrl: "/user-images/img-2.png",
      addedFrom: "System",
      tags: "-",
      internalId: "ID296",
      clientId: "-",
      phone: "+9779867****",
      clientPortal: "Deactivated",
      asignee: {
        name: "Justing",
        imageUrl: "",
        college: "",
      },
      followers: "Allison",
      status: i % 2 == 0 ? "Completed" : "In Progress",
      applications: 8,
      lastUpdated: "2025-11-19",
      isAddBtn: false,
    });
  }
  dataSource.push({ key: dataSource.length, isAddBtn: true });
  return dataSource;
}
