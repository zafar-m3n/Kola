import React, { useMemo, useState } from "react";
import { Icon } from "@iconify/react";

const TABS = [
  { id: "brand", label: "Brand", icon: "solar:leaf-bold-duotone" },
  { id: "story", label: "Story", icon: "solar:book-2-bold-duotone" },
  { id: "cards", label: "Cards", icon: "solar:card-2-bold-duotone" },
  { id: "board", label: "Board", icon: "solar:gamepad-bold-duotone" },
  { id: "kitchen", label: "Kitchen", icon: "solar:chef-hat-bold-duotone" },
  { id: "workshop", label: "Workshop", icon: "solar:users-group-rounded-bold-duotone" },
  { id: "pitch", label: "Pitch", icon: "solar:presentation-graph-bold-duotone" },
  { id: "model", label: "Model", icon: "solar:chart-2-bold-duotone" },
];

const COLORS = [
  {
    name: "Parchment",
    value: "#f7f0e3",
    usage: "Warm background, physical paper feel, storybook base",
  },
  {
    name: "Leaf Green",
    value: "#4a7a38",
    usage: "Primary accent, active tabs, eco-token language",
  },
  {
    name: "Coconut",
    value: "#c4956a",
    usage: "Warm secondary accent, kitchen, family, food cues",
  },
  {
    name: "Deep Earth",
    value: "#2a4a20",
    usage: "Main dark colour, headings, hero, premium contrast",
  },
];

const BRAND_PILLARS = [
  {
    title: "Rooted",
    icon: "solar:map-point-bold-duotone",
    text: "Sri Lankan food culture, pola visits, Aachchi knowledge, family kitchens, and local ingredients.",
  },
  {
    title: "Playful",
    icon: "solar:confetti-minimalistic-bold-duotone",
    text: "The learning happens through cards, tokens, dice, challenges, and silly food choices.",
  },
  {
    title: "Circular",
    icon: "solar:refresh-circle-bold-duotone",
    text: "Food is never shown as a straight line. Everything grows, feeds, returns, and begins again.",
  },
  {
    title: "Behavioural",
    icon: "solar:brain-bold-duotone",
    text: "Every mechanic is designed to create small real-life habit shifts after the game ends.",
  },
];

const BEHAVIOUR_PRINCIPLES = [
  {
    principle: "Gamified Nudging",
    problem: "Sustainability feels boring or preachy.",
    application: "Kids learn through choices, tokens, movement, and consequences instead of lectures.",
  },
  {
    principle: "Parental Authority Modelling",
    problem: "Parents need to feel capable, not corrected.",
    application: "Parents hold the Expert Guide, making them the trusted voice who reveals the meaning.",
  },
  {
    principle: "Positive Reinforcement",
    problem: "Good habits need instant feedback.",
    application: "Green Eco-Tokens reward useful decisions immediately and make progress visible.",
  },
  {
    principle: "Loss Aversion",
    problem: "Waste is invisible until it is too late.",
    application: "Red Waste Tokens physically clutter the table and hurt the final score more than green helps.",
  },
  {
    principle: "Implementation Intentions",
    problem: "Knowing does not automatically become doing.",
    application: "Every card ends with a family micro-nudge: a small action to try at home this week.",
  },
  {
    principle: "Identity-Based Habits",
    problem: "One-time learning does not stick.",
    application: "Children become Kola Keepers, turning sustainable behaviour into identity and pride.",
  },
];

const STORY_SPREADS = [
  {
    number: "01",
    title: "The Circle Tree",
    icon: "solar:tree-bold-duotone",
    text: "Amara visits Aachchi’s garden and notices the old coconut tree. Aachchi tells her that the tree is not just a tree — it is a circle that feeds the home and returns to the soil.",
    sensory: "Touch: dried coconut leaf texture",
  },
  {
    number: "02",
    title: "The Pola Choice",
    icon: "solar:shop-bold-duotone",
    text: "At the pola, Amara sees loose local vegetables beside plastic-wrapped produce. She learns that food has a journey before it reaches the kitchen.",
    sensory: "Activity: choose the lower-waste basket",
  },
  {
    number: "03",
    title: "The Kitchen Question",
    icon: "solar:chef-hat-bold-duotone",
    text: "A coconut is cracked open. Water, flesh, shell, husk, and leaf all have a use. Amara asks whether anything from the coconut becomes rubbish.",
    sensory: "Smell: coconut oil or toasted coconut scent pod",
  },
  {
    number: "04",
    title: "The Plate Pause",
    icon: "solar:plate-bold-duotone",
    text: "At dinner, Amara takes a huge mountain of rice but cannot finish it. Aachchi explains that taking less first can save more later.",
    sensory: "Action: place a small scoop token on the plate",
  },
  {
    number: "05",
    title: "The Return",
    icon: "solar:recycling-bold-duotone",
    text: "Peels go to compost, rice water feeds plants, and coconut husk protects the soil. Amara sees that the end of a meal can become the start of another one.",
    sensory: "Touch: rough husk fibre patch",
  },
  {
    number: "06",
    title: "The Keeper Promise",
    icon: "solar:medal-ribbon-star-bold-duotone",
    text: "Amara draws her own food circle and makes one small promise: to waste a little less than yesterday.",
    sensory: "Write: I am a Kola Keeper because...",
  },
];

const STAGES = [
  {
    id: "grow",
    name: "Grow",
    habit: "Appreciating imperfect produce",
    icon: "solar:sprout-bold-duotone",
    color: "bg-[#2a4a20]",
    text: "Food begins with soil, weather, care, and patience.",
  },
  {
    id: "harvest",
    name: "Harvest",
    habit: "Mindful picking and preserving",
    icon: "solar:basket-bold-duotone",
    color: "bg-[#4a7a38]",
    text: "Taking food at the right time prevents waste before it happens.",
  },
  {
    id: "distribute",
    name: "Distribute",
    habit: "Buying local and reducing plastic",
    icon: "solar:delivery-bold-duotone",
    color: "bg-[#c4956a]",
    text: "Every food choice carries packaging, transport, and community impact.",
  },
  {
    id: "eat",
    name: "Eat",
    habit: "Managing plate waste",
    icon: "solar:plate-bold-duotone",
    color: "bg-[#2a4a20]",
    text: "Small scoops first. Seconds later. Less food ends up in the bin.",
  },
  {
    id: "recycle",
    name: "Recycle",
    habit: "Repurposing leftovers",
    icon: "solar:refresh-bold-duotone",
    color: "bg-[#4a7a38]",
    text: "Leftovers are not failed meals. They are next-day ingredients.",
  },
  {
    id: "return",
    name: "Return",
    habit: "Sorting organic waste",
    icon: "solar:recycling-bold-duotone",
    color: "bg-[#c4956a]",
    text: "Food scraps return to soil instead of being trapped in landfill.",
  },
];

const GAME_CARDS = [
  {
    stage: "Grow",
    icon: "solar:sprout-bold-duotone",
    habit: "Appreciating imperfect produce",
    question:
      "You are picking strawberries. One is perfectly red but shaped like a funny alien. The other is perfectly round but slightly pale. Which do you pick?",
    optionA: "The funny-looking alien strawberry.",
    optionB: "The perfectly round, neat strawberry.",
    answerA:
      "Brilliant choice. Nature does not make everything perfect. Funny-looking fruit can taste just as sweet, and choosing it saves good food from being ignored.",
    answerB:
      "When people only choose perfect-looking food, good produce often gets rejected even though it is still delicious.",
    rewardA: "Take 1 Green Eco-Token. Move forward 1 space.",
    rewardB: "Take 1 Red Waste Token. Stay on this space.",
    nudge: "Next time we shop, let’s hunt for the funniest-looking fruit or vegetable and buy it.",
  },
  {
    stage: "Harvest",
    icon: "solar:basket-bold-duotone",
    habit: "Mindful portioning and preserving",
    question: "Your tomato plant has too many ripe tomatoes for this week. What should your family do?",
    optionA: "Leave them until you are ready, even if they get mushy.",
    optionB: "Pick them now and turn them into sauce to freeze.",
    answerA: "Letting food rot wastes the water, sunlight, soil, time, and care that helped it grow.",
    answerB: "MasterChef move. Preserving food is like pressing pause on time and saving it for later.",
    rewardA: "Take 1 Red Waste Token. Stay on this space.",
    rewardB: "Take 1 Green Eco-Token. Move forward 2 spaces.",
    nudge: "Let’s check the fridge or freezer today and name one ingredient we can rescue before it spoils.",
  },
  {
    stage: "Distribute",
    icon: "solar:delivery-bold-duotone",
    habit: "Supporting local and reducing plastic",
    question:
      "You need bananas for school snacks. You see imported bananas wrapped in plastic and local bananas loose in a crate. Which do you pick?",
    optionA: "The shiny plastic-wrapped bananas.",
    optionB: "The loose local bananas.",
    answerA: "Plastic was added for a short snack, but the wrapper may stay around for a very long time.",
    answerB: "Eco-Hero choice. Bananas already have their own natural jacket, and local food usually travels less.",
    rewardA: "Take 2 Red Waste Tokens. Move forward 1 space.",
    rewardB: "Take 2 Green Eco-Tokens. Move forward 2 spaces.",
    nudge: "Let’s count how many plastic food packages are in our kitchen and find one swap for next time.",
  },
  {
    stage: "Eat",
    icon: "solar:plate-bold-duotone",
    habit: "Managing plate waste",
    question: "You are very hungry at dinner. The food smells amazing. How much do you scoop onto your plate?",
    optionA: "Pile it high like a mountain.",
    optionB: "Take a small scoop first and go back for seconds.",
    answerA: "Your eyes were bigger than your tummy. Food left on personal plates is harder to save safely.",
    answerB: "Smart eating. Food left in the serving bowl can be saved cleanly for tomorrow.",
    rewardA: "Take 2 Red Waste Tokens. Stay on this space.",
    rewardB: "Take 1 Green Eco-Token. Move forward 1 space.",
    nudge: "Tonight, let’s try the Small Scoop Rule. Everyone can get seconds if they are still hungry.",
  },
  {
    stage: "Recycle",
    icon: "solar:refresh-bold-duotone",
    habit: "Repurposing leftovers",
    question: "Dinner is over and there is a bowl of plain white rice left. What should the family do?",
    optionA: "Throw it away so the kitchen is tidy.",
    optionB: "Put it in the fridge and make fried rice tomorrow.",
    answerA: "Food in the regular bin can end up rotting in landfill instead of being used as food or soil.",
    answerB: "Leftover magic. Day-old rice is actually perfect for fried rice.",
    rewardA: "Take 1 Red Waste Token. Stay on this space.",
    rewardB: "Take 1 Green Eco-Token. Move forward 1 space.",
    nudge: "Let’s give our next leftover meal a fun family name, like Mystery Magic Feast Night.",
  },
  {
    stage: "Return",
    icon: "solar:recycling-bold-duotone",
    habit: "Sorting organic waste",
    question: "You just finished an apple. Where does the apple core go?",
    optionA: "Into the green compost bin.",
    optionB: "Into the regular trash bin.",
    answerA: "Circle complete. The apple core can become compost, feed soil, and help grow more food.",
    answerB: "Broken chain. In the wrong bin, food scraps cannot easily return to the soil.",
    rewardA: "Take 2 Green Eco-Tokens. Complete the Kola Circle.",
    rewardB: "Take 1 Red Waste Token. Try again next turn.",
    nudge: "Let’s set a small bowl on the kitchen counter this week just for fruit peels and veggie scraps.",
  },
];

const KITCHEN_ROUNDS = [
  {
    round: "Round 1",
    title: "Harvest",
    icon: "solar:basket-bold-duotone",
    time: "10 minutes",
    goal: "Choose one local ingredient and name every useful part of it.",
    scoring: ["Local ingredient chosen", "At least two parts used", "Family explains where it came from"],
  },
  {
    round: "Round 2",
    title: "Rescue",
    icon: "solar:chef-hat-bold-duotone",
    time: "15 minutes",
    goal: "Turn a leftover into a new dish idea, snack, sambol, curry, or lunchbox item.",
    scoring: ["Leftover is safely reused", "Dish idea is realistic", "Child gives the rescued meal a name"],
  },
  {
    round: "Round 3",
    title: "Return",
    icon: "solar:recycling-bold-duotone",
    time: "5 minutes",
    goal: "Create a plan for every peel, shell, scrap, or leftover that cannot be eaten.",
    scoring: [
      "Compost or reuse plan is named",
      "No useful part is thrown away",
      "Family makes one real kitchen pledge",
    ],
  },
];

const WORKSHOP_STEPS = [
  {
    time: "0–10 min",
    title: "Hook",
    text: "Ask families to name one food they wasted this week. Keep it normal and shame-free.",
  },
  {
    time: "10–25 min",
    title: "Story Read-Aloud",
    text: "Read the Kola story and let children touch the sensorial pieces while parents observe.",
  },
  {
    time: "25–50 min",
    title: "Board Game Test",
    text: "Families play one loop using cards, red tokens, green tokens, and parent expert reveals.",
  },
  {
    time: "50–70 min",
    title: "Circular MasterChef",
    text: "Families invent a leftover rescue meal and a return plan for scraps.",
  },
  {
    time: "70–85 min",
    title: "Kola Keeper Pledge",
    text: "Each child writes one realistic habit they will try at home this week.",
  },
  {
    time: "85–90 min",
    title: "Feedback Wall",
    text: "Collect what confused them, what excited them, and what they would actually use at home.",
  },
];

const PITCH_SLIDES = [
  {
    label: "Problem",
    icon: "solar:danger-triangle-bold-duotone",
    title: "Families know waste is bad, but daily behaviour does not change.",
    points: [
      "Sustainability is often taught as information, not as a felt habit.",
      "Children understand through play, touch, repetition, and family modelling.",
      "Parents need a simple way to lead the conversation without preparing a lesson.",
    ],
  },
  {
    label: "Insight",
    icon: "solar:lightbulb-bolt-bold-duotone",
    title: "Make sustainability felt, not explained.",
    points: [
      "A red waste token on the table is more memorable than a paragraph about landfill.",
      "A parent reading an Expert Card feels more natural than an outside teacher correcting the family.",
      "A child who becomes a Kola Keeper is more likely to repeat the behaviour.",
    ],
  },
  {
    label: "Solution",
    icon: "solar:magic-stick-3-bold-duotone",
    title: "Kola Circle is a family board game for circular food habits.",
    points: [
      "Children make food choices through dilemma cards.",
      "Parents reveal the meaning through expert answer cards.",
      "The board, tokens, score, and kitchen challenge turn circularity into a repeatable family ritual.",
    ],
  },
  {
    label: "MVP",
    icon: "solar:box-bold-duotone",
    title: "A testable kit that can be built with paper, cards, bowls, and tokens.",
    points: [
      "One circular board with six stages.",
      "Six decision cards with parent answer cards.",
      "Green Eco-Tokens, Red Waste Tokens, and a simple scorecard.",
      "One Circular MasterChef activity for workshops.",
    ],
  },
  {
    label: "Impact",
    icon: "solar:heart-pulse-2-bold-duotone",
    title: "Small household decisions become visible, discussable, and repeatable.",
    points: [
      "Children learn where food comes from.",
      "Parents gain a guided way to discuss food waste.",
      "Families leave with one real micro-habit to try at home.",
    ],
  },
];

const BUSINESS_TIERS = [
  {
    title: "Workshop Prototype",
    icon: "solar:presentation-graph-bold-duotone",
    text: "Used in schools, design thinking sessions, food-sector events, and sustainability activations.",
    tag: "First validation channel",
  },
  {
    title: "Family Edition Kit",
    icon: "solar:box-bold-duotone",
    text: "A reusable board game box with cards, tokens, parent guide, scorecard, and storybook.",
    tag: "Core product",
  },
  {
    title: "Refill Card Packs",
    icon: "solar:card-send-bold-duotone",
    text: "New cards for different food themes: coconut, rice, vegetables, snacks, leftovers, and seasonal foods.",
    tag: "Repeat purchase",
  },
  {
    title: "School Programme",
    icon: "solar:square-academic-cap-bold-duotone",
    text: "Lesson-friendly version for classrooms with group play, worksheet prompts, and pledge walls.",
    tag: "Institutional channel",
  },
  {
    title: "Brand / NGO Partnerships",
    icon: "solar:hand-heart-bold-duotone",
    text: "Co-created food waste education campaigns with circular food brands, retailers, farms, and NGOs.",
    tag: "Scale channel",
  },
];

const PARTNERS = [
  {
    name: "Schools",
    icon: "solar:square-academic-cap-bold-duotone",
    role: "Run workshops and classroom pilots",
  },
  {
    name: "Pola Vendors",
    icon: "solar:shop-bold-duotone",
    role: "Connect children to local food sources",
  },
  {
    name: "Farms",
    icon: "solar:leaf-bold-duotone",
    role: "Provide real circular food stories",
  },
  {
    name: "Parents",
    icon: "solar:users-group-rounded-bold-duotone",
    role: "Lead expert-guided behaviour change",
  },
  {
    name: "Food Brands",
    icon: "solar:bag-4-bold-duotone",
    role: "Sponsor refill packs and activations",
  },
  {
    name: "NGOs",
    icon: "solar:hand-heart-bold-duotone",
    role: "Support impact measurement and reach",
  },
];

function App() {
  const [activeTab, setActiveTab] = useState("brand");
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [selectedChoice, setSelectedChoice] = useState("A");

  const activeCard = useMemo(() => {
    return GAME_CARDS[activeCardIndex];
  }, [activeCardIndex]);

  function handleCardChange(index) {
    setActiveCardIndex(index);
    setSelectedChoice("A");
  }

  return (
    <main className="min-h-screen bg-[#f7f0e3] font-['DM_Sans'] text-[#2a4a20]">
      <Hero />

      <div className="sticky top-0 z-40 border-b border-[#2a4a20]/10 bg-[#f7f0e3]/90 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex gap-2 overflow-x-auto py-3">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition ${
                  activeTab === tab.id
                    ? "border-[#2a4a20] bg-[#2a4a20] text-[#f7f0e3]"
                    : "border-[#4a7a38]/20 bg-[#f7f0e3] text-[#2a4a20] hover:border-[#4a7a38] hover:bg-[#4a7a38]/10"
                }`}
              >
                <Icon icon={tab.icon} className="text-lg" />
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 md:py-14 lg:px-8">
        {activeTab === "brand" && <BrandTab />}
        {activeTab === "story" && <StoryTab />}
        {activeTab === "cards" && (
          <CardsTab
            activeCard={activeCard}
            activeCardIndex={activeCardIndex}
            selectedChoice={selectedChoice}
            onCardChange={handleCardChange}
            onChoiceChange={setSelectedChoice}
          />
        )}
        {activeTab === "board" && <BoardTab />}
        {activeTab === "kitchen" && <KitchenTab />}
        {activeTab === "workshop" && <WorkshopTab />}
        {activeTab === "pitch" && <PitchTab />}
        {activeTab === "model" && <ModelTab />}
      </section>
    </main>
  );
}

function Hero() {
  return (
    <header className="relative isolate overflow-hidden bg-[#2a4a20] px-4 py-16 text-center text-[#f7f0e3] sm:px-6 md:py-24">
      <div className="absolute -left-24 top-12 h-72 w-72 rounded-full bg-[#4a7a38]/40 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[#c4956a]/30 blur-3xl" />
      <Icon
        icon="solar:leaf-bold-duotone"
        className="absolute right-8 top-6 -z-10 text-[180px] text-[#f7f0e3]/5 md:text-[260px]"
      />

      <div className="relative mx-auto max-w-4xl">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#f7f0e3]/20 bg-[#f7f0e3]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-[#f7f0e3]/80">
          <Icon icon="solar:gamepad-bold-duotone" className="text-base" />
          Circular Food Startup Prototype
        </div>

        <h1 className="font-['Dancing_Script'] text-7xl leading-none text-[#f7f0e3] sm:text-8xl md:text-9xl">
          kola<span className="text-[#c4956a]">.</span>
        </h1>

        <p className="mt-4 font-['Instrument_Serif'] text-3xl italic text-[#f7f0e3] md:text-4xl">Grow. Eat. Return.</p>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#f7f0e3]/80 md:text-lg">
          A family board game and sensorial learning kit that turns everyday food decisions into playful circular habits
          for kids, parents, and kitchens.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Badge icon="solar:leaf-bold-duotone" text="Design Thinking" />
          <Badge icon="solar:brain-bold-duotone" text="Behavioural Science" />
          <Badge icon="solar:chef-hat-bold-duotone" text="Food Circularity" />
          <Badge icon="solar:users-group-rounded-bold-duotone" text="Family Edition" />
        </div>
      </div>
    </header>
  );
}

function Badge({ icon, text }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-[#f7f0e3]/20 bg-[#f7f0e3]/10 px-4 py-2 text-sm font-semibold text-[#f7f0e3]/90">
      <Icon icon={icon} className="text-lg text-[#c4956a]" />
      {text}
    </span>
  );
}

function SectionHeader({ eyebrow, title, text }) {
  return (
    <div className="mb-8 max-w-3xl">
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-[#4a7a38]">{eyebrow}</p>
      <h2 className="font-['Instrument_Serif'] text-4xl leading-tight text-[#2a4a20] md:text-6xl">{title}</h2>
      <p className="mt-4 text-base leading-8 text-[#2a4a20]/75 md:text-lg">{text}</p>
    </div>
  );
}

function BrandTab() {
  return (
    <div>
      <SectionHeader
        eyebrow="Brand Identity"
        title="Meet Kola Circle."
        text="Kola means leaf in Sinhala. A leaf grows, falls, feeds the soil, and returns. That simple circular image becomes the entire brand system."
      />

      <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-4xl bg-[#2a4a20] p-6 text-[#f7f0e3] md:p-8">
          <div className="mb-8 flex items-start justify-between gap-6">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#c4956a]">Master Brand</p>
              <h3 className="mt-3 font-['Dancing_Script'] text-7xl leading-none">kola.</h3>
            </div>
            <Icon icon="solar:leaf-bold-duotone" className="text-6xl text-[#c4956a]" />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <NameCard name="Kola Circle" desc="The family board game product line" />
            <NameCard name="Kola Kitchen" desc="The Circular MasterChef component" />
            <NameCard name="Kola Keepers" desc="The child identity programme" />
            <NameCard name="Expert Guide" desc="The parent authority mechanic" />
          </div>

          <div className="mt-6 rounded-3xl border border-[#f7f0e3]/15 bg-[#f7f0e3]/10 p-5">
            <p className="font-['Instrument_Serif'] text-2xl italic leading-snug">
              “We do not teach children about sustainability. We let them feel it in their hands, on their plates, and
              in the stories they carry home.”
            </p>
          </div>
        </div>

        <div className="rounded-4xl border border-[#4a7a38]/20 bg-[#f7f0e3] p-6 shadow-sm md:p-8">
          <h3 className="font-['Instrument_Serif'] text-3xl text-[#2a4a20]">Colour System</h3>
          <p className="mt-2 text-sm leading-7 text-[#2a4a20]/70">
            Warm, earthy, food-led, and physical. The colours should feel like a storybook, a garden, a coconut shell,
            and a kitchen table.
          </p>

          <div className="mt-6 space-y-4">
            {COLORS.map((color) => (
              <div key={color.name} className="rounded-3xl border border-[#4a7a38]/15 bg-white/30 p-4">
                <div className="flex items-center gap-4">
                  <div
                    className="h-14 w-14 rounded-2xl border border-[#2a4a20]/10"
                    style={{ backgroundColor: color.value }}
                  />
                  <div>
                    <p className="font-bold text-[#2a4a20]">{color.name}</p>
                    <p className="text-sm font-semibold text-[#4a7a38]">{color.value}</p>
                  </div>
                </div>
                <p className="mt-3 text-sm leading-6 text-[#2a4a20]/70">{color.usage}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {BRAND_PILLARS.map((pillar) => (
          <InfoCard key={pillar.title} {...pillar} />
        ))}
      </div>

      <div className="mt-8 rounded-4xl border border-[#4a7a38]/20 bg-white/30 p-6 md:p-8">
        <h3 className="font-['Instrument_Serif'] text-3xl text-[#2a4a20]">Behavioural Science Backbone</h3>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {BEHAVIOUR_PRINCIPLES.map((item) => (
            <div key={item.principle} className="rounded-3xl border border-[#4a7a38]/15 bg-[#f7f0e3] p-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#c4956a]">{item.principle}</p>
              <p className="mt-3 text-sm font-semibold text-[#2a4a20]">Problem: {item.problem}</p>
              <p className="mt-2 text-sm leading-7 text-[#2a4a20]/70">{item.application}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function NameCard({ name, desc }) {
  return (
    <div className="rounded-3xl border border-[#f7f0e3]/15 bg-[#f7f0e3]/10 p-4">
      <p className="font-['Instrument_Serif'] text-2xl text-[#f7f0e3]">{name}</p>
      <p className="mt-1 text-sm leading-6 text-[#f7f0e3]/70">{desc}</p>
    </div>
  );
}

function InfoCard({ title, icon, text }) {
  return (
    <article className="rounded-4xl border border-[#4a7a38]/20 bg-white/30 p-6 shadow-sm">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#4a7a38]/10 text-[#4a7a38]">
        <Icon icon={icon} className="text-3xl" />
      </div>
      <h3 className="font-['Instrument_Serif'] text-2xl text-[#2a4a20]">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-[#2a4a20]/70">{text}</p>
    </article>
  );
}

function StoryTab() {
  return (
    <div>
      <SectionHeader
        eyebrow="Sensorial Storybook"
        title="Kola and the Circle Tree."
        text="A read-aloud family story where Amara and Aachchi follow food from tree to kitchen to plate to soil and back again."
      />

      <div className="grid gap-5 lg:grid-cols-3">
        <div className="rounded-4xl bg-[#2a4a20] p-6 text-[#f7f0e3] lg:sticky lg:top-28 lg:h-fit">
          <Icon icon="solar:book-2-bold-duotone" className="text-5xl text-[#c4956a]" />
          <h3 className="mt-5 font-['Instrument_Serif'] text-4xl">The story becomes the game.</h3>
          <p className="mt-4 text-sm leading-7 text-[#f7f0e3]/75">
            Each spread introduces one food decision. The child feels a texture, answers a question, and then sees that
            same idea appear later on the board.
          </p>
          <div className="mt-6 rounded-3xl bg-[#f7f0e3]/10 p-4">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#c4956a]">Hero Ingredient</p>
            <p className="mt-2 font-['Instrument_Serif'] text-3xl">Coconut</p>
            <p className="mt-2 text-sm leading-6 text-[#f7f0e3]/70">
              Shell, husk, flesh, water, oil, leaf, and soil return.
            </p>
          </div>
        </div>

        <div className="grid gap-5 lg:col-span-2">
          {STORY_SPREADS.map((spread) => (
            <article
              key={spread.number}
              className="overflow-hidden rounded-4xl border border-[#4a7a38]/20 bg-white/30 shadow-sm"
            >
              <div className="flex items-center justify-between gap-4 bg-[#2a4a20] p-5 text-[#f7f0e3]">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f7f0e3]/10 font-['Dancing_Script'] text-3xl text-[#c4956a]">
                    {spread.number}
                  </div>
                  <div>
                    <p className="font-['Instrument_Serif'] text-2xl">{spread.title}</p>
                    <p className="text-xs uppercase tracking-[0.2em] text-[#f7f0e3]/55">Story Spread</p>
                  </div>
                </div>
                <Icon icon={spread.icon} className="text-4xl text-[#c4956a]" />
              </div>
              <div className="p-5 md:p-6">
                <p className="text-base leading-8 text-[#2a4a20]/80">{spread.text}</p>
                <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#c4956a]/15 px-4 py-2 text-sm font-semibold text-[#2a4a20]">
                  <Icon icon="solar:hand-stars-bold-duotone" className="text-xl text-[#c4956a]" />
                  {spread.sensory}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

function CardsTab({ activeCard, activeCardIndex, selectedChoice, onCardChange, onChoiceChange }) {
  const selectedAnswer = selectedChoice === "A" ? activeCard.answerA : activeCard.answerB;
  const selectedReward = selectedChoice === "A" ? activeCard.rewardA : activeCard.rewardB;
  const isGoodChoice = selectedReward.includes("Green");

  return (
    <div>
      <SectionHeader
        eyebrow="Card System"
        title="The choice is the learning moment."
        text="Children make the choice first. Parents then reveal the consequence using the Expert Guide. This keeps the game playful while giving parents authority."
      />

      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-4xl border border-[#4a7a38]/20 bg-white/30 p-4 shadow-sm lg:sticky lg:top-28 lg:h-fit">
          <p className="px-2 pb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#4a7a38]">Stage Cards</p>
          <div className="space-y-2">
            {GAME_CARDS.map((card, index) => (
              <button
                key={card.stage}
                type="button"
                onClick={() => onCardChange(index)}
                className={`flex w-full items-center gap-3 rounded-3xl border p-4 text-left transition ${
                  activeCardIndex === index
                    ? "border-[#2a4a20] bg-[#2a4a20] text-[#f7f0e3]"
                    : "border-[#4a7a38]/15 bg-[#f7f0e3] text-[#2a4a20] hover:border-[#4a7a38]"
                }`}
              >
                <Icon
                  icon={card.icon}
                  className={`text-3xl ${activeCardIndex === index ? "text-[#c4956a]" : "text-[#4a7a38]"}`}
                />
                <div>
                  <p className="font-bold">{card.stage}</p>
                  <p className={`text-sm ${activeCardIndex === index ? "text-[#f7f0e3]/70" : "text-[#2a4a20]/60"}`}>
                    {card.habit}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-5">
          <article className="overflow-hidden rounded-4xl border border-[#4a7a38]/20 bg-[#f7f0e3] shadow-sm">
            <div className="bg-[#2a4a20] p-6 text-[#f7f0e3]">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#c4956a]">Kid Decision Card</p>
                  <h3 className="mt-3 font-['Instrument_Serif'] text-4xl">{activeCard.stage}</h3>
                </div>
                <Icon icon={activeCard.icon} className="text-5xl text-[#c4956a]" />
              </div>
              <p className="mt-5 text-lg leading-8 text-[#f7f0e3]/85">{activeCard.question}</p>
            </div>

            <div className="grid gap-4 p-5 md:grid-cols-2 md:p-6">
              <ChoiceButton
                label="Option A"
                text={activeCard.optionA}
                active={selectedChoice === "A"}
                onClick={() => onChoiceChange("A")}
              />
              <ChoiceButton
                label="Option B"
                text={activeCard.optionB}
                active={selectedChoice === "B"}
                onClick={() => onChoiceChange("B")}
              />
            </div>
          </article>

          <article className="rounded-4xl border border-[#c4956a]/30 bg-white/30 p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#c4956a]/20 text-[#c4956a]">
                <Icon icon="solar:user-speak-rounded-bold-duotone" className="text-3xl" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#c4956a]">Parent Expert Answer</p>
                <h3 className="font-['Instrument_Serif'] text-3xl text-[#2a4a20]">Reveal the why</h3>
              </div>
            </div>

            <p className="mt-5 text-base leading-8 text-[#2a4a20]/80">{selectedAnswer}</p>

            <div
              className={`mt-5 rounded-3xl border p-5 ${
                isGoodChoice ? "border-[#4a7a38]/30 bg-[#4a7a38]/10" : "border-[#c4956a]/40 bg-[#c4956a]/15"
              }`}
            >
              <div className="flex items-start gap-3">
                <Icon
                  icon={isGoodChoice ? "solar:leaf-bold-duotone" : "solar:danger-triangle-bold-duotone"}
                  className={`mt-1 text-3xl ${isGoodChoice ? "text-[#4a7a38]" : "text-[#c4956a]"}`}
                />
                <div>
                  <p className="font-bold text-[#2a4a20]">Token Consequence</p>
                  <p className="mt-1 text-sm leading-7 text-[#2a4a20]/75">{selectedReward}</p>
                </div>
              </div>
            </div>

            <div className="mt-5 rounded-3xl bg-[#2a4a20] p-5 text-[#f7f0e3]">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#c4956a]">Family Micro-Nudge</p>
              <p className="mt-2 text-sm leading-7 text-[#f7f0e3]/80">{activeCard.nudge}</p>
            </div>
          </article>

          <div className="grid gap-4 md:grid-cols-3">
            <MiniMechanic icon="solar:card-2-bold-duotone" title="Kid Card" text="The child owns the choice." />
            <MiniMechanic icon="solar:user-id-bold-duotone" title="Expert Guide" text="The parent owns the reveal." />
            <MiniMechanic
              icon="solar:medal-ribbon-star-bold-duotone"
              title="Tokens"
              text="The table shows the consequence."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function ChoiceButton({ label, text, active, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-3xl border p-5 text-left transition ${
        active
          ? "border-[#2a4a20] bg-[#2a4a20] text-[#f7f0e3]"
          : "border-[#4a7a38]/20 bg-white/30 text-[#2a4a20] hover:border-[#4a7a38]"
      }`}
    >
      <p className={`text-xs font-bold uppercase tracking-[0.22em] ${active ? "text-[#c4956a]" : "text-[#4a7a38]"}`}>
        {label}
      </p>
      <p className="mt-3 text-base font-semibold leading-7">{text}</p>
    </button>
  );
}

function MiniMechanic({ icon, title, text }) {
  return (
    <div className="rounded-3xl border border-[#4a7a38]/20 bg-white/30 p-5">
      <Icon icon={icon} className="text-4xl text-[#4a7a38]" />
      <p className="mt-3 font-bold text-[#2a4a20]">{title}</p>
      <p className="mt-1 text-sm leading-6 text-[#2a4a20]/65">{text}</p>
    </div>
  );
}

function BoardTab() {
  return (
    <div>
      <SectionHeader
        eyebrow="Board Game"
        title="A circular board, not a linear race."
        text="The board teaches that food systems do not end at eating. The goal is to complete the circle with the cleanest household."
      />

      <div className="grid gap-6 lg:grid-cols-[1fr_0.85fr]">
        <div className="rounded-4xl border border-[#4a7a38]/20 bg-white/30 p-6 shadow-sm">
          <div className="relative mx-auto grid aspect-square max-w-2xl place-items-center rounded-full border-16 border-[#4a7a38]/20 bg-[#f7f0e3] p-8">
            <div className="absolute inset-10 rounded-full border border-dashed border-[#2a4a20]/25" />

            {STAGES.map((stage, index) => (
              <BoardNode key={stage.id} stage={stage} index={index} />
            ))}

            <div className="z-10 flex h-40 w-40 flex-col items-center justify-center rounded-full bg-[#2a4a20] p-5 text-center text-[#f7f0e3] shadow-xl md:h-52 md:w-52">
              <Icon icon="solar:leaf-bold-duotone" className="text-4xl text-[#c4956a]" />
              <p className="mt-2 font-['Dancing_Script'] text-4xl leading-none">kola.</p>
              <p className="mt-1 text-xs font-bold uppercase tracking-[0.18em] text-[#f7f0e3]/60">
                Green Bin / Red Bin
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-5">
          <div className="rounded-4xl bg-[#2a4a20] p-6 text-[#f7f0e3] shadow-sm">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#c4956a]">How to Play</p>
            <div className="mt-5 space-y-4">
              {[
                "Roll the die",
                "Land on a circular food stage",
                "Draw the matching Decision Card",
                "Kid chooses Option A or B",
                "Parent reads the Expert Answer",
                "Take green or red tokens",
              ].map((step, index) => (
                <div key={step} className="flex items-center gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f7f0e3]/10 text-sm font-bold text-[#c4956a]">
                    {index + 1}
                  </div>
                  <p className="text-sm font-semibold text-[#f7f0e3]/85">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-4xl border border-[#4a7a38]/20 bg-white/30 p-6 shadow-sm">
            <h3 className="font-['Instrument_Serif'] text-3xl text-[#2a4a20]">Winning Condition</h3>
            <p className="mt-3 text-sm leading-7 text-[#2a4a20]/70">
              The first player to complete the circle ends the game, but the winner is the player with the cleanest
              household score.
            </p>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <TokenCard
                icon="solar:leaf-bold-duotone"
                title="Green Eco-Token"
                score="+10 points"
                text="Reward for useful circular choices."
              />
              <TokenCard
                icon="solar:trash-bin-trash-bold-duotone"
                title="Red Waste Token"
                score="-15 points"
                text="Waste hurts more than green helps."
              />
            </div>
          </div>

          <div className="rounded-4xl border border-[#c4956a]/30 bg-[#c4956a]/15 p-6">
            <p className="font-bold text-[#2a4a20]">Why it works</p>
            <p className="mt-2 text-sm leading-7 text-[#2a4a20]/70">
              Red blocks make waste physically annoying. Green leaves make good choices visible. The score turns values
              into a playful household challenge.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {STAGES.map((stage) => (
          <article key={stage.id} className="rounded-4xl border border-[#4a7a38]/20 bg-white/30 p-6 shadow-sm">
            <div
              className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ${stage.color} text-[#f7f0e3]`}
            >
              <Icon icon={stage.icon} className="text-3xl" />
            </div>
            <h3 className="font-['Instrument_Serif'] text-3xl text-[#2a4a20]">{stage.name}</h3>
            <p className="mt-2 text-sm font-bold text-[#4a7a38]">{stage.habit}</p>
            <p className="mt-3 text-sm leading-7 text-[#2a4a20]/70">{stage.text}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

function BoardNode({ stage, index }) {
  const positions = [
    "left-1/2 top-2 -translate-x-1/2",
    "right-5 top-1/4",
    "right-8 bottom-1/4",
    "bottom-2 left-1/2 -translate-x-1/2",
    "bottom-1/4 left-8",
    "left-5 top-1/4",
  ];

  return (
    <div
      className={`absolute z-20 flex h-20 w-20 flex-col items-center justify-center rounded-3xl border-4 border-[#f7f0e3] ${stage.color} text-[#f7f0e3] shadow-lg md:h-28 md:w-28 ${positions[index]}`}
    >
      <Icon icon={stage.icon} className="text-2xl md:text-4xl" />
      <p className="mt-1 text-xs font-bold md:text-sm">{stage.name}</p>
    </div>
  );
}

function TokenCard({ icon, title, score, text }) {
  return (
    <div className="rounded-3xl border border-[#4a7a38]/15 bg-[#f7f0e3] p-5">
      <Icon icon={icon} className="text-4xl text-[#4a7a38]" />
      <p className="mt-3 font-bold text-[#2a4a20]">{title}</p>
      <p className="mt-1 font-['Instrument_Serif'] text-2xl text-[#c4956a]">{score}</p>
      <p className="mt-2 text-sm leading-6 text-[#2a4a20]/65">{text}</p>
    </div>
  );
}

function KitchenTab() {
  return (
    <div>
      <SectionHeader
        eyebrow="Circular MasterChef"
        title="Kola Kitchen turns leftovers into play."
        text="The kitchen component makes the board game practical. Families move from talking about circularity to inventing meals, rescuing ingredients, and returning scraps."
      />

      <div className="grid gap-5 lg:grid-cols-3">
        {KITCHEN_ROUNDS.map((round) => (
          <article
            key={round.title}
            className="overflow-hidden rounded-4xl border border-[#4a7a38]/20 bg-white/30 shadow-sm"
          >
            <div className="bg-[#2a4a20] p-6 text-[#f7f0e3]">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#c4956a]">{round.round}</p>
                  <h3 className="mt-2 font-['Instrument_Serif'] text-4xl">{round.title}</h3>
                </div>
                <Icon icon={round.icon} className="text-5xl text-[#c4956a]" />
              </div>
              <p className="mt-4 inline-flex rounded-full bg-[#f7f0e3]/10 px-3 py-1 text-sm font-semibold text-[#f7f0e3]/80">
                {round.time}
              </p>
            </div>

            <div className="p-6">
              <p className="text-base leading-8 text-[#2a4a20]/80">{round.goal}</p>

              <div className="mt-6 space-y-3">
                {round.scoring.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-3xl bg-[#f7f0e3] p-4">
                    <Icon icon="solar:check-circle-bold-duotone" className="mt-1 shrink-0 text-2xl text-[#4a7a38]" />
                    <p className="text-sm leading-6 text-[#2a4a20]/75">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8 rounded-4xl bg-[#2a4a20] p-6 text-[#f7f0e3] md:p-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#c4956a]">Card Game Version</p>
            <h3 className="mt-3 font-['Instrument_Serif'] text-4xl">Ingredient + Technique + Rescue</h3>
            <p className="mt-4 text-sm leading-7 text-[#f7f0e3]/75">
              Families draw local ingredient cards and pair them with technique cards like preserve, ferment, freeze,
              sun-dry, compost, or repurpose.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <KitchenMini
              icon="solar:leaf-bold-duotone"
              title="Ingredient"
              text="Coconut, rice, banana, gotukola, jak, lime"
            />
            <KitchenMini
              icon="solar:magic-stick-3-bold-duotone"
              title="Technique"
              text="Freeze, ferment, dry, pickle, compost, upcycle"
            />
            <KitchenMini
              icon="solar:cup-hot-bold-duotone"
              title="Dish"
              text="A realistic rescue meal the family would eat"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function KitchenMini({ icon, title, text }) {
  return (
    <div className="rounded-3xl border border-[#f7f0e3]/15 bg-[#f7f0e3]/10 p-5">
      <Icon icon={icon} className="text-4xl text-[#c4956a]" />
      <p className="mt-3 font-bold text-[#f7f0e3]">{title}</p>
      <p className="mt-2 text-sm leading-6 text-[#f7f0e3]/65">{text}</p>
    </div>
  );
}

function WorkshopTab() {
  return (
    <div>
      <SectionHeader
        eyebrow="Workshop Flow"
        title="A 90-minute design thinking test."
        text="This format lets you test whether families understand the game, whether parents like the Expert Guide role, and whether children remember the micro-habits."
      />

      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-4xl bg-[#2a4a20] p-6 text-[#f7f0e3] lg:sticky lg:top-28 lg:h-fit">
          <Icon icon="solar:users-group-rounded-bold-duotone" className="text-5xl text-[#c4956a]" />
          <h3 className="mt-5 font-['Instrument_Serif'] text-4xl">What you are testing</h3>
          <div className="mt-6 space-y-4">
            {[
              "Can children play without too much explanation?",
              "Do parents enjoy being the expert?",
              "Are red tokens emotionally noticeable?",
              "Do families leave with one real habit?",
              "Does the kitchen activity make the concept feel practical?",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <Icon icon="solar:check-circle-bold-duotone" className="mt-1 shrink-0 text-2xl text-[#c4956a]" />
                <p className="text-sm leading-7 text-[#f7f0e3]/80">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-4xl border border-[#4a7a38]/20 bg-white/30 p-6 shadow-sm">
          {WORKSHOP_STEPS.map((step, index) => (
            <div key={step.title} className="flex gap-5">
              <div className="flex flex-col items-center">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#4a7a38] text-sm font-bold text-[#f7f0e3]">
                  {index + 1}
                </div>
                {index !== WORKSHOP_STEPS.length - 1 && <div className="h-full min-h-12 w-px bg-[#4a7a38]/25" />}
              </div>

              <div className="pb-8">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#c4956a]">{step.time}</p>
                <h3 className="mt-1 font-['Instrument_Serif'] text-3xl text-[#2a4a20]">{step.title}</h3>
                <p className="mt-2 text-sm leading-7 text-[#2a4a20]/70">{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PitchTab() {
  return (
    <div>
      <SectionHeader
        eyebrow="Startup Pitch"
        title="The pitch is simple: food habits need play."
        text="Kola Circle sits between family board games, sustainability education, food-sector circularity, and Sri Lankan cultural storytelling."
      />

      <div className="grid gap-5 lg:grid-cols-2">
        {PITCH_SLIDES.map((slide) => (
          <article
            key={slide.label}
            className="overflow-hidden rounded-4xl border border-[#4a7a38]/20 bg-white/30 shadow-sm"
          >
            <div className="bg-[#2a4a20] p-6 text-[#f7f0e3]">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#c4956a]">{slide.label}</p>
                  <h3 className="mt-3 font-['Instrument_Serif'] text-3xl leading-snug">{slide.title}</h3>
                </div>
                <Icon icon={slide.icon} className="text-5xl text-[#c4956a]" />
              </div>
            </div>

            <div className="space-y-3 p-6">
              {slide.points.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#4a7a38]" />
                  <p className="text-sm leading-7 text-[#2a4a20]/75">{point}</p>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8 rounded-4xl bg-[#2a4a20] p-6 text-center text-[#f7f0e3] md:p-10">
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#c4956a]">Moat Statement</p>
        <h3 className="mx-auto mt-3 max-w-4xl font-['Instrument_Serif'] text-4xl leading-tight md:text-5xl">
          Kola is not just an educational board game. It is a behaviour-change ritual for the family kitchen.
        </h3>
      </div>
    </div>
  );
}

function ModelTab() {
  return (
    <div>
      <SectionHeader
        eyebrow="Business Model"
        title="From workshop prototype to circular product ecosystem."
        text="Start with a low-cost workshop prototype, validate the mechanics, then turn the best-tested version into a family kit and partner-led programme."
      />

      <div className="grid gap-5 lg:grid-cols-5">
        {BUSINESS_TIERS.map((tier) => (
          <article key={tier.title} className="rounded-4xl border border-[#4a7a38]/20 bg-white/30 p-6 shadow-sm">
            <Icon icon={tier.icon} className="text-4xl text-[#4a7a38]" />
            <h3 className="mt-4 font-['Instrument_Serif'] text-2xl leading-tight text-[#2a4a20]">{tier.title}</h3>
            <p className="mt-3 text-sm leading-7 text-[#2a4a20]/70">{tier.text}</p>
            <p className="mt-5 inline-flex rounded-full bg-[#c4956a]/15 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-[#2a4a20]">
              {tier.tag}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
        <div className="rounded-4xl border border-[#4a7a38]/20 bg-white/30 p-6 shadow-sm md:p-8">
          <h3 className="font-['Instrument_Serif'] text-4xl text-[#2a4a20]">Ecosystem Partners</h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PARTNERS.map((partner) => (
              <div key={partner.name} className="rounded-3xl border border-[#4a7a38]/15 bg-[#f7f0e3] p-5">
                <Icon icon={partner.icon} className="text-4xl text-[#4a7a38]" />
                <p className="mt-3 font-bold text-[#2a4a20]">{partner.name}</p>
                <p className="mt-2 text-sm leading-6 text-[#2a4a20]/65">{partner.role}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-4xl bg-[#2a4a20] p-6 text-[#f7f0e3] md:p-8">
          <Icon icon="solar:route-bold-duotone" className="text-5xl text-[#c4956a]" />
          <h3 className="mt-5 font-['Instrument_Serif'] text-4xl">Suggested MVP Path</h3>

          <div className="mt-6 space-y-4">
            {[
              "Build one paper board and 12 printed cards.",
              "Test with 3 families or one workshop table.",
              "Observe where people get confused without explaining.",
              "Keep the cards that create real conversation.",
              "Turn the strongest version into a printable kit.",
            ].map((step, index) => (
              <div key={step} className="flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f7f0e3]/10 text-sm font-bold text-[#c4956a]">
                  {index + 1}
                </div>
                <p className="text-sm leading-7 text-[#f7f0e3]/78">{step}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-3xl border border-[#f7f0e3]/15 bg-[#f7f0e3]/10 p-5">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#c4956a]">First Sellable Version</p>
            <p className="mt-2 text-sm leading-7 text-[#f7f0e3]/75">
              A family kit with one foldable board, 36 cards, 6 player tokens, green leaves, red waste blocks,
              scorecards, storybook, and parent expert guide.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
