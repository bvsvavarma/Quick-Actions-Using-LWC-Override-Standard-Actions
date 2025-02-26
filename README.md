# Quick-Actions-Using-LWC-Override-Standard-Actions

**Quick Action**

1. A quick action can invoke a custom Lightning Web Component on record pages.
2. When it comes to record page LWC, there are 2 types: Screen Quick Actions and Headless Quick Actions.
3. When you configure a component, you can choose either to display it in a modal window, or headlessly execute its custom code.

   ![image](https://github.com/user-attachments/assets/3f4638a9-dbfc-4624-8762-13e36f20c301)

Screen Quick Action

1. A screen quick action appears in a modal window.
2. Use the Lightning-quick-action-panel component for a consistent user interface.
3. To enable your component to be used a screen quick action, configure a target.
4. Unlike other components on record pages, LWC quick actions don't pass in recordId in connectedCallback(). If you need access to recordId, set the value of recordId in your code.

![image](https://github.com/user-attachments/assets/a26b4318-e8d8-47ed-8387-f68446961918)

![image](https://github.com/user-attachments/assets/5a1284e2-ba2a-4de0-82a5-c96f9eaddd2d)

