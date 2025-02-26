# Quick-Actions-Using-LWC-Override-Standard-Actions

**Quick Action**

1. A quick action can invoke a custom Lightning Web Component on record pages.
2. When it comes to record page LWC, there are 2 types: Screen Quick Actions and Headless Quick Actions.
3. When you configure a component, you can choose either to display it in a modal window, or headlessly execute its custom code.

   ![image](https://github.com/user-attachments/assets/3f4638a9-dbfc-4624-8762-13e36f20c301)

**Screen Quick Action**

1. A screen quick action appears in a modal window.
2. Use the Lightning-quick-action-panel component for a consistent user interface.
3. To enable your component to be used a screen quick action, configure a target.
4. Unlike other components on record pages, LWC quick actions don't pass in recordId in connectedCallback(). If you need access to recordId, set the value of recordId in your code.

![image](https://github.com/user-attachments/assets/a26b4318-e8d8-47ed-8387-f68446961918)

![image](https://github.com/user-attachments/assets/5a1284e2-ba2a-4de0-82a5-c96f9eaddd2d)

**Component Metada for Screen Action**

![image](https://github.com/user-attachments/assets/cc851f6b-9008-4f8b-943d-017385fbc404)

**Headless Quick Action**

1. A headless quick action executes custom code in a LWC. Unlike a screen action, a headless action doesn't open a modal window.
2. In your LWC, always expose invoke() as a public method for headless quick actions. The invoke() method executes every time the quick action is triggered.
3. Create an empty template for your LWC.

![image](https://github.com/user-attachments/assets/3015d58b-f3d4-4be8-82cd-6d2ca5b8a412)

**Override Standard Actions**
Currently Standard Actions Overrides only support Aura Components. To use a LWC to override Standard Actions, you must wrap it in an Aura component.

![image](https://github.com/user-attachments/assets/a9e0b14e-3d39-452b-873f-e23d10249894)

Set the name of the interfaces you are implementing
   lightning:actionOverride
Makes your components available for action overrides.
   force:hasRecordId, force:hasObjectName
Inject attribute values for recordId and sObjectName when possible.
