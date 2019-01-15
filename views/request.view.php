<form id='request' action='./'>
          <div class="form-group">
            <select class="form-control" id="interest" placeholder='Interested in...' required>
              <option  disabled selected value>Interested in...</option>
              <option value='website'>Both Design & Development</option>
              <option value='ui'>Only UI Design</option>
              <option value='dev'>Only Development</option>
            </select>
          </div>
          <div class="form-group cs3-animate">
            <label for="name">Your name</label>
            <input type="text" class="form-control" id="name" placeholder="Your name" required>
          </div>
          <div class="form-group cs3-animate">
            <label for="email">Email</label>
            <input type="email" class="form-control" id="email" placeholder="Email" required>
          </div>
          <div class="form-group cs3-animate">
            <label for="description">Project description (optional)</label>
            <textarea class="form-control" id="description" rows="3" placeholder="Project description (optional)" noresize></textarea>
          </div>

          <button class='btn get-in-touch' type='submit' id='touch'>SEND</button>
        </form>