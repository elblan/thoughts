<template>
  <div class="thoughts-wrapper">
    <div class="thoughts">
      <div
        class="thoughts-list"
        v-for="(thought, index) in localThoughts"
        :key="thought.text"
      >
        <div class="thought-meta-published" v-if="thought.active">
          {{ format(thought.date) }}
        </div>
        <div
          class="thought"
          :class="{ active: thought.active }"
          @click="toggleActive(index)"
        >
          <p>{{ thought.text }}</p>
          <!-- <span>{{ thought.text.length }}</span> -->
        </div>
        <div
          class="delete-thought"
          v-if="thought.active"
          @click="removeThought(n)"
        >
          delete
        </div>
      </div>
    </div>
    <div class="sticky">
      <div class="new-thought" v-if="showForm">
        <div class="thought-meta">
          <div class="buttons">
            <div class="delete-button" @click="deleteAll">Delete all</div>
            <div class="cancel-button" @click="showForm = false">
              Cancel
            </div>
          </div>
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
        </div>
      </div>
      <div
        class="thought-button"
        @click="showForm ? addThought() : (showForm = true)"
      >
        {{ showForm ? 'Save' : 'Add thought' }}
      </div>
    </div>
  </div>
</template>

<script>
import { format } from 'timeago.js'

export default {
  name: 'HelloWorld',
  data() {
    return {
      showForm: false,
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
      this.showForm = false
      window.scrollTo(0, 0)
    },
    saveThoughts() {
      this.localThoughts.forEach(function(v) {
        delete v.active
      })
      const parsed = JSON.stringify(this.localThoughts)
      localStorage.setItem('thoughts', parsed)
    },
    removeThought(x) {
      this.localThoughts.splice(x, 1)
      this.saveThoughts()
      window.location.reload()
    },
    deleteAll() {
      localStorage.clear()
      window.location.reload()
    },
    format: format
  }
}
</script>

<style scoped lang="scss">
.thoughts-wrapper {
  background-color: $green3;
  padding-bottom: 8px;
}
.thoughts {
  margin-bottom: 80px;
}
.thoughts-list {
  display: flex;
  flex-direction: column;
  margin-top: 4px;
  .thought-meta-published {
    color: $blue1;
    font-size: 18px;
    padding-bottom: -2rem;
  }
  .thought {
    background-color: $white;
    color: $blue1;
    border-radius: 16px;
    box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.04);
    padding: 8px;
    margin: 14px 22px;
  }
  .active {
    background-color: $blue3;
    box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.12);
  }
  .delete-thought {
    background-color: $red2;
    color: $green3;
    font-size: 18px;
    padding: 0.4rem;
    width: 20%;
    margin: auto;
    border-radius: 12px;
  }
}
.sticky {
  position: fixed;
  bottom: 20px;
  left: 50%;
  width: 100%;
  transform: translate(-50%, 0);
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
      .buttons {
        display: flex;
        .delete-button {
          background-color: $red2;
          color: $green3;
          padding: 0.4rem;
          margin-right: 5px;
          border-radius: 12px;
        }
        .cancel-button {
          background-color: $blue1;
          color: $green3;
          padding: 0.4rem;
          border-radius: 12px;
        }
      }
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
    }
  }
}
.thought-button {
  bottom: 15px;

  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.08);
  background-color: $blue2;
  border-radius: 50px;
  padding: 1rem;
  color: white;
  width: 40%;
  margin: auto;
}
[contenteditable] {
  outline: 0px solid transparent;
}
</style>
