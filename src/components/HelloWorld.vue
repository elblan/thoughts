<template>
  <div class="thoughts-wrapper">
    <div class="new-thought">
      <div class="thought-meta">
        <span class="done">📍La Trinité-sur-Mer</span>
        <span class="counter">{{ 160 - thoughtObj.text.length }}</span>
      </div>
      <div class="thought-form">
        <div class="thought-content" contenteditable="true" @input="onInput">
          <p>Edit me</p>
        </div>
      </div>
      <div class="thought-submit">
        <!--
        <div class="tags">
          <span v-for="tag in tags" :key="tag" class="tag">{{ tag }}</span>
        </div>-->
        <div class="buttons">
          <div class="delete-button">Delete</div>
          <div class="submit-button" @click="addThought">Save</div>
        </div>
      </div>
    </div>
    <div class="thoughts-list">
      <div
        class="thought"
        :class="{ active: thought.active }"
        v-for="(thought, index) in localThoughts"
        :key="thought.text"
        @click="toggleActive(index)"
      >
        <p>{{ thought.text }}</p>
        <!-- <span>{{ thought.text.length }}</span> -->
      </div>
    </div>

    <!--
    <div class="thought-button">
      <div class="plus">+</div>
      <span class="button-text">Add thought</span>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      isActive: false,
      localThoughts: [],
      thoughtObj: { text: '' },
      tags: ['Pensée', 'Note', 'Code']
    }
  },
  mounted() {
    if (localStorage.getItem('thoughts')) {
      try {
        this.localThoughts = JSON.parse(localStorage.getItem('thoughts'))
        console.log(JSON.stringify(this.localThoughts, null, 2))
      } catch (e) {
        localStorage.removeItem('thoughts')
      }
    }
  },
  methods: {
    onInput(e) {
      this.thoughtObj.text = e.target.innerText
      console.log(this.thoughtObj.text)
    },
    toggleActive(index) {
      let item = this.localThoughts[index]
      item.active = !item.active
      this.$set(this.localThoughts, index, item)
    },

    addThought() {
      // ensure they actually typed something
      if (!this.thoughtObj.text) {
        return
      }
      let newText = this.thoughtObj.text
      let newDate = new Date()
      this.localThoughts.unshift({ text: newText, date: newDate })
      this.thoughtObj.text = ''
      this.saveThoughts()
    },
    saveThoughts() {
      const parsed = JSON.stringify(this.localThoughts)
      localStorage.setItem('thoughts', parsed)
    },
    removeThought(x) {
      this.localThoughts.splice(x, 1)
      this.saveThoughts()
    }
  }
}
</script>

<style scoped lang="scss">
.thoughts-wrapper {
  background-color: $green3;
  padding-bottom: 8px;
}

.thoughts-list {
  display: flex;
  flex-direction: column;
  margin-top: 4px;
  .thought {
    background-color: $white;
    color: $blue1;
    border-radius: 16px;
    box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.04);
    padding: 8px;
    margin: 14px 22px;
  }
  .active {
    background-color: $orange1;
  }
}
.new-thought {
  .thought-form {
    background-color: white;
    color: $blue1;
    border: $blue3 5px solid;
    padding: 8px;
    border-radius: 16px;
    padding: 32px;
    margin: 4px 8px;
  }
  .thought-meta {
    display: flex;
    justify-content: space-between;
    margin: 4px 18px 0 18px;
    font-size: 16px;
    color: $blue1;
  }
  .thought-submit {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin: 8px 18px 6px 18px;
    font-size: 16px;
    .tag {
      background-color: $green3;
      color: $orange1;
      padding: 0.4rem;
      margin: 0.2rem;
      border-radius: 12px;
    }
    .buttons {
      display: flex;
      .delete-button {
        background-color: $red2;
        color: $green3;
        padding: 0.4rem;
        margin-right: 5px;
        border-radius: 12px;
      }
      .submit-button {
        background-color: $blue2;
        color: $green3;
        padding: 0.4rem;
        border-radius: 12px;
      }
    }
  }
}
.thought-button {
  position: sticky;
  bottom: 10px;
  z-index: 2;
  display: flex;
  justify-content: left;
  align-items: center;
  background-color: white;
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.08);
  border-radius: 50px;
  width: 60%;
  margin: auto;
  padding: 1rem;
  .plus {
    color: $blue2;
    font-size: 50px;
    font-weight: 400;
    background-color: $green3;
    padding: 0 1.5rem;
    border-radius: 50px;
  }
  .button-text {
    padding-left: 1rem;
    font-size: 24px;
  }
}
[contenteditable] {
  outline: 0px solid transparent;
}
</style>
