<template>
  <div>
    <ul class="list-group">
      <li class="list-group-item">Email: {{ user.email }}</li>

      <li class="list-group-item">Username: {{ user.username }}</li>

      <li class="list-group-item">Name: {{ user.firstname }}</li>

      <li class="list-group-item">Role: {{ user.type }}</li>
    </ul>

    <div class="field">
      <label class="label"> AM</label>

      <div class="control">
        <input
          class="input"
          v-model="am"
          type="text"
          placeholder="AM"
          required
        />
      </div>
    </div>

    <div class="field is-grouped" style="margin-top: 20px">
      <div class="control">
        <button class="button is-link" @click="submit()">Be Student</button>
      </div>
    </div>

    <div>
      <b-tabs content-class="mt-3">
        <b-tab title="First" active>
          <vue-good-table
            @on-selected-rows-change="selectionChanged"
            :columns="columns"
            :rows="lessonsteaching"
            :select-options="{ enabled: true }"
            :search-options="{ enabled: true }"
          >
            <div slot="selected-row-actions">
              <button @click="submitstatement()">Submit Lessons</button>
            </div>
          </vue-good-table>
        </b-tab>

        <b-tab title="Second">
          <vue-good-table
            @on-selected-rows-change="selectionChanged"
            :columns="columns"
            :rows="lessonsteaching"
            :select-options="{ enabled: true }"
            :search-options="{ enabled: true }"
          >
            <div slot="selected-row-actions">
              <button @click="submitstatement()">Submit Lessons</button>
            </div>
          </vue-good-table>
        </b-tab>

        <b-tab title="Disabled" disabled>
          <p>I'm a disabled tab!</p>
        </b-tab>
      </b-tabs>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      rowSelection: [],
      am: null,
      columns: [
        {
          label: "Lesson",
          field: "lesson.name",
          filterOptions: {
            enabled: true,
            customFilter: true,
            formatValue: this.formatFilterValue,
          },
        },
      ],
    };
  },

  components: {},
  computed: mapGetters(["user", "lessonsteaching"]),
  methods: {
    ...mapActions([
      "getProfile",
      "beStudent",
      "loadlessonsteaching",
      "createStatement",
    ]),
    submit() {
      const body = { am: this.am, year_registered: 2021, user: this.user._id };
      this.beStudent(body);
    },
    submitstatement() {
      const statement = { studentID: this.user._id, lessonTeachings: this.rowSelection };

      this.createStatement(statement);
    },
    selectionChanged(params) {
      this.rowSelection = params.selectedRows;
    },
  },
  created() {
    this.getProfile();
    this.loadlessonsteaching();
  },
};
</script>
