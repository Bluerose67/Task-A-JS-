![Screenshot 2024-12-10 214724](https://github.com/user-attachments/assets/98da9b7d-bd8b-4246-b94a-287d595dc18f)feature
1. Dynamic card display
A set of "cards" will appear on the grid. And the script ensures that only one card is fully visible at a time. while other cards Some sections will be shown for reference. The way it works is as follows:

Active card: All visible and in the center of the screen.
Bottom card: Partially reduced in size and located at the bottom of the screen.
Top Card: Partially reduced in size and moved to the top of the screen.
This creates a seamless depth effect. It highlights the active sheet while keeping the rest visible.

2. Drag-to-scroll interaction
Users can interact by dragging the mouse to scroll through the cards.

How it works:

Drag detection: The code detects when the user starts and stops dragging using mouse events. (mouse down, mouse move, mouse up)
Criteria: If the drag gap is large enough This will cause a transition to the next or previous card.
Directional scrolling: The drag direction (up or down) determines whether the user scrolls to the next or previous card.
Technical highlights:

Smooth transitions: Cards move and resize smoothly. Increase visual attractiveness
Scroll Lock: Only one card is changed during a drag. This will ensure that there are no accidental skips.
3. Infinite Scrolling
The cards are arranged in circles:

Move to the last card and cycle back to the first card.
Move down from the first card circle to the last card circle.
Makes navigation easy and free of obstacles.

How did it happen?
When you drag the mouse The card moves into view. Create a smooth and engaging browsing experience.
The design focuses on displaying content grouped in order. This makes it ideal for portfolios, stories, or tutorials.
This project combines simple design with smooth interactions. Create an intuitive interface for navigating grouped content.
![Screenshot 2024-12-10 214724](https://github.com/user-attachments/assets/519983cc-460b-4485-9814-536f2418d92a)
