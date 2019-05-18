Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :home
  root to: 'home#index'

  namespace :api do
    namespace :v1 do
      resources :excrements, only: [:index, :create, :destroy, :update] do
        collection do
          get :radar_data
        end
      end
    end
  end

end
